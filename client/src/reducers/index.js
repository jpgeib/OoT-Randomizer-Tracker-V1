import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import ocarinaOfTimeReducer from "./ocarinaOfTimeReducer";
import fireArrowsReducer from "./fireArrowsReducer";

export default combineReducers({
    fairyOcarina: fairyOcarinaReducer,
    ocarinaOfTime: ocarinaOfTimeReducer,
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer,
    fireArrows: fireArrowsReducer
});