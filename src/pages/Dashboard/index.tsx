import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import React, { useEffect, useState } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from 'services/api';

import { Container, Header, MeetupItem, MeetupsList } from './styles';

interface Meetup {
  id: number;
  title: string;
  date: string;
  formatedDate?: string;
}

export default function Dashboard() {
  const [meetups, setMeetups] = useState<Meetup[]>([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetups');
      const arrayMeetup: Meetup[] = response.data.map((item: Meetup) => ({
        id: item.id,
        title: item.title,
        formatedDate: format(parseISO(item.date), "dd 'de' MMMM', às' HH'h' ", {
          locale: pt,
        }),
      }));

      setMeetups(arrayMeetup);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <Link to="/new">
          <button type="button" className="btn btn--primary btn--icon">
            <MdAddCircleOutline size={20} color="fff" />
            Novo Meetup
          </button>
        </Link>
      </Header>
      <MeetupsList>
        {meetups.map(meetup => (
          <Link to={`/meetup/${meetup.id}`} key={String(meetup.id)}>
            <MeetupItem>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.formatedDate}</span>
                <MdChevronRight size={24} color="#fff" />
              </div>
            </MeetupItem>
          </Link>
        ))}
      </MeetupsList>
    </Container>
  );
}
