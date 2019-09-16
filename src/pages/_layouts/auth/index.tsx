import React from 'react';
import { RouteProps } from 'react-router-dom';

import { Content, Wrapper } from './styles';

export default function AuthLayout({ children }: RouteProps) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
