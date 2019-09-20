import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'store';
import { updateProfileRequest } from 'store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state: ApplicationState) => state.user.profile);

  function handleSubmit(data: any) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          name="old_password"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirmação de senha"
        />

        <button type="submit" className="btn btn--primary btn--icon">
          <MdAccountCircle size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
