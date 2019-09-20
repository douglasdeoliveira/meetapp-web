/* eslint-disable no-console */
import {
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
} from './types';

export function updateProfileRequest(data: any) {
  console.log(data);

  return {
    type: UPDATE_PROFILE_REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess(profile: any) {
  console.log(profile);

  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: UPDATE_PROFILE_FAILURE,
  };
}
