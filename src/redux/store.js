import { combineReducers } from "redux";
import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userReducer,
  userPortfolioReducer,
  userLoginReducer,
  getAllUserReducer,
  userProfileReducer,
  userEduReducer,
  userSkillReducer,
  userProjectReducer,
} from "./reducers/userReducers";

const rootReducer = combineReducers({
  userReducer,
  userPortfolioReducer,
  userLoginReducer,
  getAllUserReducer,
  userProfileReducer,
  userEduReducer,
  userSkillReducer,
  userProjectReducer,
});

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = { userLoginReducer: { currentUser } };
const composedEnhancers = composeWithDevTools({});

const store = legacy_createStore(
  rootReducer,
  initialState,
  composedEnhancers(applyMiddleware(thunk))
);

export default store;
