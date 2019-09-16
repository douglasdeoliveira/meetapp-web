import { Form, Input } from '@rocketseat/unform';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from 'assets/logo.svg';
// import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  // const dispatch = useDispatch();
  // const loading = useSelector(state => state.auth.loading);
  const loading = false;
  // function handleSubmit({ name, email, password }) {
  //   dispatch(signUpRequest(name, email, password));
  // }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={() => {}}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Seu senha secreta"
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Criar uma conta'}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
