import { Form, Input } from '@rocketseat/unform';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'services/api';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import { Container } from './styles';

type Meetup = {
  title: string;
  description: string;
  date: string;
  location: string;
  file_id: number | null;
  file: {
    url: string;
  };
};

const schema = Yup.object().shape({
  file_id: Yup.number().required('A imagem é obrigatória'),
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.string()
    .required('A data é obrigatória')
    .nullable(),
  location: Yup.string().required('A localização é obrigatória'),
});

type Props = RouteComponentProps<any>;

export default function NewEdit({ match, history }: Props) {
  const meetupId = match.params.id;

  const [meetup, setMeetup] = useState<Meetup>({
    title: '',
    description: '',
    location: '',
    date: '',
    file_id: null,
    file: { url: '' },
  });

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${meetupId}`);

      setMeetup(response.data);
    }
    if (meetupId) {
      loadMeetup();
    }
  }, [meetupId]);

  async function updateMeetup(data: any) {
    try {
      await api.put(`/meetups/${meetupId}`, data);

      toast.success('Meetup atualizado com sucesso');
      history.push(`/meetup/${meetupId}`);
    } catch (err) {
      toast.error('Error ao atualizar o meetup');
    }
  }

  async function createMeetup(data: any) {
    try {
      await api.post('/meetups', data);

      toast.success('Meetup criado com sucesso');
      history.push('/');
    } catch (err) {
      toast.error('Error ao criar o meetup');
    }
  }

  function handleSubmit(data: any) {
    const newData = {
      ...data,
      date: format(new Date(data.date), "yyyy-MM-dd'T'HH:mm:ssxxx"),
    };

    if (meetupId) {
      updateMeetup(newData);
    } else {
      createMeetup(newData);
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput
          name="file_id"
          imageUrl={meetup.file.url}
          imageId={meetup.file_id}
        />
        <Input name="title" placeholder="Título do Meetup" autoComplete="off" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" initialDate={meetup.date} />
        <Input name="location" placeholder="Localização" autoComplete="off" />

        <button type="submit" className="btn btn--primary btn--icon">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
