import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import fireArrowsReducer from "./fireArrowsReducer";

export default combineReducers({
    ocarinas: fairyOcarinaReducer,
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer,
    fireArrows: fireArrowsReducer
});