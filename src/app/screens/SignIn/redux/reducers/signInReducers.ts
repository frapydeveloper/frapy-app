import {
  CLEAR_CREDENTIALS,
  SET_EMAIL,
  SET_PASSWORD,
} from "../constants/signInConstants";

const initialState: { email: string; password: string } = {
  email: "",
  password: "",
};

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.data,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.data,
      };
    case CLEAR_CREDENTIALS:
      return {
        email: "",
        password: "",
      };
    default:
      return state;
  }
};
