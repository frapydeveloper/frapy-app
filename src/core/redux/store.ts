import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Pusher from "pusher-js";

//ACTIONS
import { authUser } from "./actions/authActions";

//REDUCERS
import { authReducer } from "./reducers/authReducers";
import { pusherReducer } from "./reducers/pusherReducers";
import { modalManagerReducer } from "./reducers/modalManagerReducers";
import { newProjectFormReducer } from "../../app/screens/Dashboard/modalManager/modals/NewProject/redux/reducers/formManagerReducers";
import { screenManagerReducer } from "./reducers/screenManagerReducers";
import { signInReducer } from "../../app/screens/SignIn/redux/reducers/signInReducers";
import { tutorialReducer } from "../../app/components/Tutorials/redux/reducers/tutorialReducers";
import { loadingManagerReducer } from "./reducers/loadingManagerReducers";

const modalManagerReducers = combineReducers({
  state: modalManagerReducer,
  newProjectForm: newProjectFormReducer,
});

const screenDataReducers = combineReducers({
  signIn: signInReducer,
});

const appReducers = combineReducers({
  modalManager: modalManagerReducers,
  tutorialManager: tutorialReducer,
});

const coreReducers = combineReducers({
  account: authReducer,
  app: appReducers,
  pusher: pusherReducer,
  screenManager: screenManagerReducer,
  screenData: screenDataReducers,
  loadingManager: loadingManagerReducer,
});

const initialState = {
  pusher: new Pusher(process.env.REACT_APP_PUSHER_KEY ?? "", {
    cluster: "eu",
  }),
};

const middleware = [thunk];

const store = createStore(
  coreReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch(authUser());

export default store;
