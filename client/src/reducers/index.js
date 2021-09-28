import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";

export default combineReducers({
    skulltulaCounter: skulltulaCounterReducer
});