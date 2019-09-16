import { Form, Input } from '@rocketseat/unform';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from 'assets/logo.svg';
// import { singInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  // const dispatch = useDispatch();
  // const loading = useSelector(state => state.auth.loading);
  const loading = false;
  // function handleSubmit({ email, password }) {
  //   dispatch(singInRequest(email, password));
  // }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={() => {}}>
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

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Acessar'}
        </button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
