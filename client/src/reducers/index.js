import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import ocarinasReducer from "./ocarinasReducer";
import fireArrowsReducer from "./fireArrowsReducer";

export default combineReducers({
    ocarinas: ocarinasReducer,
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer,
    fireArrows: fireArrowsReducer
});