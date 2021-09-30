import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";

export default combineReducers({
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer
});