import { Form, Input } from '@rocketseat/unform';
import logo from 'assets/logo.svg';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ApplicationState } from 'store';
import { signUpRequest } from 'store/modules/auth/actions';
import * as Yup from 'yup';

type Credentials = {
  name: string;
  email: string;
  password: string;
};

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
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  function handleSubmit(data: any) {
    const { name, email, password }: Credentials = data;
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="name"
          type="text"
          placeholder="Nome completo"
          autoComplete="off"
        />
        <Input
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
          autoComplete="off"
        />
        <Input
          name="password"
          type="password"
          placeholder="Seu senha secreta"
        />

        <button type="submit" className="btn btn--primary" disabled={loading}>
          {loading ? 'Carregando...' : 'Criar uma conta'}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
