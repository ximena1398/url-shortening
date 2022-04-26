import { combineReducers } from "redux";
import { LinkReducer } from "../services/Area/LinkSlice";


export default combineReducers({
  Link:LinkReducer,
});
