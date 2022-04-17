import { setTutorial } from "./../../../app/components/Tutorials/redux/actions/tutorialActions";
import { frapyClient } from "@core/api";
import { SET_ACCOUNT } from "../constants/authConstants";
import { setLoading } from "./loadingManagerActions";

export const authUser = () => async (dispatch: any) => {
  if (localStorage.getItem("access-token")) {
    try {
      const result: any = await frapyClient.users.retrieveUserBySession();
      dispatch({ type: SET_ACCOUNT, data: result.data.user });
      dispatch(setLoading(false));
      dispatch(setTutorial("getting-started"));
    } catch (error) {
      localStorage.removeItem("access-token");
      window.location.reload();
    }
  }
};
