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

const modalManagerReducers = combineReducers({
  state: modalManagerReducer,
  newProjectForm: newProjectFormReducer,
});

const appReducers = combineReducers({
  pusher: pusherReducer,
  modalManager: modalManagerReducers,
});

const coreReducers = combineReducers({
  account: authReducer,
  app: appReducers,
});

const initialState = {
  app: {
    pusher: new Pusher(process.env.REACT_APP_PUSHER_KEY ?? "", {
      cluster: "eu",
      // encrypted: true,
    }),
  },
};

const middleware = [thunk];

const store = createStore(
  coreReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.dispatch(authUser());

export default store;
