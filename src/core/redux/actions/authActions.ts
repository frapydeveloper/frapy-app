import { SET_ACCOUNT } from "../constants/authConstants";

// import { retrieveSession } from "../../../apps/home/api/accounts";

export const authUser = () => async (dispatch: any) => {
  if (localStorage.getItem("token")) {
    // try {
    //   const result = await retrieveSession();
    //   dispatch({ type: SET_ACCOUNT, data: result.data.account });
    // } catch (error) {
    //   localStorage.removeItem("token");
    //   window.open("https://neuraerp.com/sign-in");
    // }
  }
};
