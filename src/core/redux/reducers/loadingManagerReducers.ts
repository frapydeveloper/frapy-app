import { SET_LOADING } from "../constants/loadingManagerConstants";

const initialState: { status: boolean } = {
  status: true,
};

export const loadingManagerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        status: action.status,
      };
    default:
      return state;
  }
};
