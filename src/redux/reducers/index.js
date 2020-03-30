import { combineReducers } from "redux";

// Reducers
import userReducer from "./user";
import errorReducer from "./errors";
import channelReducer from "./channel";
export default combineReducers({
  user: userReducer,
  errors: errorReducer,
  channel: channelReducer
});