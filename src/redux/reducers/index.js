import { combineReducers } from "redux";
import authReducer from "../../pages/Login/LoginSlice";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  auth: authReducer,
});

export default rootReducer;
