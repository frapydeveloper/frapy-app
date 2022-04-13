import {
  CLEAR_FORM,
  SET_ANSWER,
  SET_STEP,
} from "../constants/formManagerConstants";

const initialState = {
  answers: {},
};

export const newProjectFormReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        currentStep: action.step,
      };

    case SET_ANSWER:
      return {
        ...state,
        answers: { ...state.answers, [action.key]: action.data },
      };
    case CLEAR_FORM:
      return {
        ...state,
        currentStep: 0,
        answers: {},
      };
    default:
      return state;
  }
};
