import { combineReducers } from "redux";
import trades from "./trades";
import auth from "./auth";

export default combineReducers({
  trades,
  auth,
});
