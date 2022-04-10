import { SET_MODAL } from "../constants/modalManagerConstants";

export const modalManagerReducer = (state = {}, action: any) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        activeModal: action.modal,
        modalData: action.data,
      };
    default:
      return state;
  }
};
