import { Form, Input } from '@rocketseat/unform';
import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'store';
import { updateProfileRequest } from 'store/modules/user/actions';
import * as Yup from 'yup';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome não deve estar em branco'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail não deve estar em branco'),
  old_password: Yup.string().min(
    6,
    'Nova senha deve contar no mínimo 6 caracteres'
  ),
  password: Yup.string()
    .min(6, 'Nova senha deve contar no mínimo 6 caracteres')
    .when('old_password', (old_password: string, field: any) =>
      old_password ? field.required('Nova senha é obrigatória') : field
    ),
  password_confirmation: Yup.string().when(
    'password',
    (password: string, field: any) =>
      password
        ? field
            .required('Confirmação de senha é obrigatória')
            .oneOf(
              [Yup.ref('password')],
              'Confirmação de senha deve ser igual a nova senha'
            )
        : field
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state: ApplicationState) => state.user.profile);

  function handleSubmit(data: any, { resetForm }: any) {
    dispatch(updateProfileRequest(data));
    resetForm({ name: profile.name, email: profile.email });
  }

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          defaultValue=""
          name="old_password"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input
          defaultValue=""
          name="password"
          type="password"
          placeholder="Nova senha"
        />
        <Input
          defaultValue=""
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
