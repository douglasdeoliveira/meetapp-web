export interface UserProfile {
  name: string;
  email: string;
  password?: string;
  oldPassword?: string;
  confirmPassword?: string;
}

// export interface IUserAction {
//   type: string;
//   payload: {
//     profile: IUser;
//     user: IUser;
//     data: IUser;
//   };
// }

/*
 * DATA TYPES
 */
// export interface User {
//   name: string;
//   email: string;
// }

// export interface Session {
//   token: string;
//   user: User;
// }

/*
 * STATE TYPES
 */
export interface UserState {
  readonly profile: any;
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
