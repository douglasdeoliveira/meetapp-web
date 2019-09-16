import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.svg';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MeetApp" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
      </Content>
    </Container>
  );
}
