import { SET_TUTORIAL, FINISH_TUTORIAL } from "../constants/tutorialConstants";

type TTurorials = "getting-started" | "first-project";

export const setTutorial = (name: TTurorials) => async (dispatch: any) => {
  dispatch({ type: SET_TUTORIAL, name });
};

export const finishTutorial = () => async (dispatch: any) => {
  dispatch({ type: FINISH_TUTORIAL });
};
