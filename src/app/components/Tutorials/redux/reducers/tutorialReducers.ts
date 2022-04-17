import { FINISH_TUTORIAL, SET_TUTORIAL } from "../constants/tutorialConstants";

const initialState = {
  active: "",
};

export const tutorialReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TUTORIAL:
      return {
        active: action.name,
      };
    case FINISH_TUTORIAL:
      return {
        active: "",
      };
    default:
      return state;
  }
};
