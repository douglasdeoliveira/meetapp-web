import { Form, Input } from '@rocketseat/unform';
import logo from 'assets/logo.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ApplicationState } from 'store';
import { singInRequest } from 'store/modules/auth/actions';
import * as Yup from 'yup';

type Credentials = {
  email: string;
  password: string;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  function handleSubmit(data: any) {
    const { email, password }: Credentials = data;
    dispatch(singInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          autoComplete="off"
        />
        <Input
          name="password"
          type="password"
          placeholder="Seu senha secreta"
        />

        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? 'Carregando...' : 'Acessar'}
        </button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
