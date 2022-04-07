import { SET_ACCOUNT } from "../constants/authConstants";

export const authReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_ACCOUNT:
      return {
        ...action.data,
      };
    default:
      return state;
  }
};
