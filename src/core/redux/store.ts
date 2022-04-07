import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Pusher from "pusher-js";

//ACTIONS
import { authUser } from "./actions/authActions";

//REDUCERS
import { authReducer } from "./reducers/authReducers";
import { pusherReducer } from "./reducers/pusherReducers";

const coreReducers = combineReducers({
  account: authReducer,
  pusher: pusherReducer,
});

const initialState = {
  pusher: new Pusher(process.env.REACT_APP_PUSHER_KEY ?? "", {
    cluster: "eu",
    // encrypted: true,
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
