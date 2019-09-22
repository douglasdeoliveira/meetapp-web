import React, { useEffect, useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import { Link, RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'services/api';

import { Container, Header } from './styles';

interface Meetup {
  id: number;
  title: string;
  date: string;
  formatedDate?: string;
}

type Props = RouteComponentProps<any>;

export default function Meetup({ match, history }: Props) {
  const [meetup, setMeetup] = useState<Meetup>();
  const meetupId = match.params.id;

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${meetupId}`);

      // const arrayMeetup: Meetup[] = response.data.map((item: Meetup) => ({
      //   id: item.id,
      //   title: item.title,
      //   formatedDate: format(parseISO(item.date), "dd 'de' MMMM', às' HH'h' ", {
      //     locale: pt,
      //   }),
      // }));

      // setMeetup(arrayMeetup);
    }

    loadMeetup();
  }, [meetupId]);

  async function handleDelete() {
    try {
      await api.delete(`/meetups/${meetupId}`);
      toast.success('Meetup Cancelado com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Não é possivel cancelar esse Meetup');
    }
  }

  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <div className="actions">
          <Link to="/meetup/edit/1" className="btn btn--secondary btn--icon">
            <MdEdit size={20} color="fff" />
            Editar
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn--primary btn--icon"
          >
            <MdDeleteForever size={20} color="fff" />
            Cacenlar
          </button>
        </div>
      </Header>
    </Container>
  );
}
