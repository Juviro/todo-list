import { combineReducers } from "redux";
import items from "./items";
import navigation from "./navigation";

export default combineReducers({
  items,
  navigation,
});
