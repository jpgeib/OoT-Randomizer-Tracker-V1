import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import ocarinasReducer from "./ocarinasReducer";

export default combineReducers({
    fairyOcarina: ocarinasReducer,
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer
});