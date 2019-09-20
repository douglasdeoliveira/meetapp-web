/*
 * DATA TYPES
 */
export interface UserProfile {
  id?: number;
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
  confirmPassword?: string;
}

/*
 * STATE TYPES
 */
export interface UserState {
  readonly profile: UserProfile;
}

/*
 * ACTIONS TYPES
 */
export const UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = '@user/UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = '@user/UPDATE_PROFILE_FAILURE';

/*
 * ACTIONS
 */
export interface UpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
  payload: {
    name: string;
    email: string;
    password?: string;
    oldPassword?: string;
    confirmPassword?: string;
  };
}

export interface UpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: any;
}

export interface UpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE;
}

export type UserActionTypes =
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction;
