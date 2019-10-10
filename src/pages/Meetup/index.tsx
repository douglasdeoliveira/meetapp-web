import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Modali, { useModali } from 'modali';
import React, { useEffect, useState } from 'react';
import {
  MdDeleteForever,
  MdEdit,
  MdInsertInvitation,
  MdRoom,
} from 'react-icons/md';
import { Link, RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from 'services/api';

import { Banner, Container, Description, Header, Info } from './styles';

type Meetup = {
  title: string;
  description: string;
  location: string;
  date: string;
  formatedDate?: string;
  file: {
    url: string;
  };
};

type Props = RouteComponentProps<any>;

export default function Meetup({ match, history }: Props) {
  const meetupId = match.params.id;

  const [meetup, setMeetup] = useState<Meetup>({
    title: '',
    description: '',
    location: '',
    date: '',
    file: { url: '' },
  });

  async function handleDelete() {
    try {
      await api.delete(`/meetups/${meetupId}`);
      toast.success('Meetup cancelado com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Não é possivel cancelar esse Meetup');
    }
  }

  const [deleteModal, toggleModal] = useModali({
    animated: true,
    title: 'Você tem certeza?',
    message: 'Deletar esse meetup não poderá ser desfeito.',
    buttons: [
      <Modali.Button
        label="Cancelar"
        isStyleCancel
        onClick={() => toggleModal()}
      />,
      <Modali.Button
        label="Deletar"
        isStyleDestructive
        onClick={() => {
          handleDelete();
          toggleModal();
        }}
      />,
    ],
  });

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`/meetups/${meetupId}`);

      response.data.formatedDate = format(
        parseISO(response.data.date),
        "dd 'de' MMMM', às' HH'h' ",
        {
          locale: pt,
        }
      );

      setMeetup(response.data);
    }

    loadMeetup();
  }, [meetupId]);

  return (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>
        <div className="actions">
          <Link
            to={`/meetup/edit/${meetupId}`}
            className="btn btn--secondary btn--icon"
          >
            <MdEdit size={20} color="fff" />
            Editar
          </Link>
          <button
            type="button"
            onClick={toggleModal}
            className="btn btn--primary btn--icon"
          >
            <MdDeleteForever size={20} color="fff" />
            Deletar
          </button>
        </div>
      </Header>

      <div>
        <Banner src={meetup.file.url} alt={meetup.title} />
        <Description>
          <p>{meetup.description}</p>
        </Description>
        <Info>
          <div>
            <MdInsertInvitation size={20} />
            <span>{meetup.formatedDate}</span>
          </div>
          <div>
            <MdRoom size={20} />
            <span>{meetup.location}</span>
          </div>
        </Info>
      </div>

      <Modali.Modal {...deleteModal} />
    </Container>
  );
}
