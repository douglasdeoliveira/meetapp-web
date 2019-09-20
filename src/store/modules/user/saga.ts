import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from 'services/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';
import { UPDATE_PROFILE_REQUEST, UpdateProfileRequestAction } from './types';

export function* updateProfile({ payload }: UpdateProfileRequestAction) {
  try {
    const { name, email, ...rest } = payload;

    const profile = {
      name,
      email,
      ...(rest.old_password !== '' ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error ao atualizar perfil, confira seus dados');
    yield put(updateProfileFailure());
  }
}
export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
