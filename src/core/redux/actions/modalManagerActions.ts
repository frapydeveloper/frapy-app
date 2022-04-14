import { SET_MODAL } from "../constants/modalManagerConstants";

type TModal = "dashboard-new-project" | "dashboard-new-team";

export const setModal =
  (modal?: TModal, data?: any) => async (dispatch: any) => {
    dispatch({ type: SET_MODAL, modal, data });
  };
