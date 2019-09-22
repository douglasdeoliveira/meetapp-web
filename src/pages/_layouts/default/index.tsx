import Header from 'components/Header';
import React from 'react';
import { RouteProps } from 'react-router-dom';

import { Container, Wrapper } from './styles';

export default function DefaultLayout({ children }: RouteProps) {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
    </Wrapper>
  );
}
