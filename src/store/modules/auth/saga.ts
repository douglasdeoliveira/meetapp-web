import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import history from 'services/history';

import { signFailure, signInSuccess } from './actions';
import {
  SIGN_IN_REQUEST,
  SIGN_OUT,
  SIGN_UP_REQUEST,
  SignInRequestAction,
  SignUpRequestAction,
} from './types';

export function* signIn({ payload }: SignInRequestAction) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    // if (!user.provider) {
    //   toast.error('Usuário não é prestador');
    //   return;
    // }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação! Verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }: SignUpRequestAction) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro! Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken(data: any) {
  console.tron.log(data);

  if (!data.payload) {
    return;
  }

  const { token } = data.payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
  takeLatest(SIGN_OUT, signOut),
]);
