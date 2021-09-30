import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";

export default combineReducers({
    ocarinas: fairyOcarinaReducer,
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer
});