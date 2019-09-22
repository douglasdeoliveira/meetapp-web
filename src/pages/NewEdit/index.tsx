import { Form, Input } from '@rocketseat/unform';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'services/api';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import { Container } from './styles';

interface Meetup {
  title: string;
  description: string;
  date: string;
  location: string;
  file: {
    url: string;
  };
}

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
  const [meetup, setMeetup] = useState<Meetup>();

  async function handleSubmit(data: any) {
    try {
      const newData = {
        ...data,
        date: format(new Date(data.date), "yyyy-MM-dd'T'HH:mm:ssxxx"),
      };
      await api.post(`/meetups`, newData);

      toast.success('Meetup criado com sucesso');
      history.push('/');
    } catch (err) {
      toast.error('Error ao criar o meetup');
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" imageUrl="" />
        <Input name="title" placeholder="Título do Meetup" autoComplete="off" />
        <Input name="description" multiline placeholder="Descrição completa" />
        <DatePicker name="date" initialDate={undefined} />
        <Input name="location" placeholder="Localização" autoComplete="off" />

        <button type="submit" className="btn btn--primary btn--icon">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar Meetup
        </button>
      </Form>
    </Container>
  );
}
