import { SET_SCREEN } from "../constants/screenManagerConstants";

export const screenManagerReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_SCREEN:
      return {
        ...state,
        activeScreen: action.screen,
        screenData: action.data,
      };
    default:
      return state;
  }
};
