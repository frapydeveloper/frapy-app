import { SET_LOADING } from "../constants/loadingManagerConstants";

export const setLoading = (status: boolean) => async (dispatch: any) => {
  dispatch({ type: SET_LOADING, status });
};
