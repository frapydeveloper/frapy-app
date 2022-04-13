import store from "../../../../../../../../core/redux/store";
import {
  CLEAR_FORM,
  SET_ANSWER,
  SET_STEP,
} from "../constants/formManagerConstants";

export const setStep = (step: number) => async (dispatch: any) => {
  dispatch({ type: SET_STEP, step });
};

export const setAnswer = (key: string, data: any) => async (dispatch: any) => {
  dispatch({ type: SET_ANSWER, key, data });
};

export const clearForm = () => async (dispatch: any) => {
  dispatch({ type: CLEAR_FORM });
};
