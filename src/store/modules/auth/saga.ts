import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';
import history from 'services/history';

import { signFailure, signInSuccess } from './actions';
import {
  REFRESH_TOKEN,
  RefreshTokenAction,
  REHYDRATE,
  RehydrateAction,
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

    toast.success('Sua conta foi criada com sucesso!');
    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro! Verifique seus dados');
    yield put(signFailure());
  }
}

export function setToken({ payload }: RehydrateAction) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function refreshToken({ payload }: RefreshTokenAction) {
  if (!payload) {
    return;
  }

  const { token } = payload;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest(REHYDRATE, setToken),
  takeLatest(REFRESH_TOKEN, refreshToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
  takeLatest(SIGN_OUT, signOut),
]);
