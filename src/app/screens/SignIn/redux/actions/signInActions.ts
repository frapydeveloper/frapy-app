import {
  CLEAR_CREDENTIALS,
  SET_EMAIL,
  SET_PASSWORD,
} from "../constants/signInConstants";

export const setEmail = (data?: string) => async (dispatch: any) => {
  dispatch({ type: SET_EMAIL, data });
};

export const setPassword = (data?: string) => async (dispatch: any) => {
  dispatch({ type: SET_PASSWORD, data });
};

export const clearCredentials = (data?: string) => async (dispatch: any) => {
  dispatch({ type: CLEAR_CREDENTIALS, data });
};
