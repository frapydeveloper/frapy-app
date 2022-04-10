import store from "../../../../../../../../core/redux/store";
import {
  CLEAR_FORM,
  SET_ANSWER,
  SET_STEP,
} from "../constants/formManagerConstants";

export const setStep = (step: number) => async (dispatch: any) => {
  dispatch({ type: SET_STEP, step });
};

export const setAnswer = (answer: any) => async (dispatch: any) => {
  const { currentStep } = store.getState().app.modalManager.newProjectForm;

  dispatch({ type: SET_ANSWER, answer, step: currentStep });
};

export const clearForm = () => async (dispatch: any) => {
  dispatch({ type: CLEAR_FORM });
};
