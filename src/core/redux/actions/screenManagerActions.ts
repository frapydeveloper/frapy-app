import { SET_SCREEN } from "../constants/screenManagerConstants";

export const setScreen =
  (screen?: string, data?: any) => async (dispatch: any) => {
    dispatch({ type: SET_SCREEN, screen, data });
  };
