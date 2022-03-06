import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import fireArrowsReducer from "./fireArrowsReducer";
import dekuShieldReducer from "./dekuShieldReducer";

export default combineReducers({
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer,
    fairyOcarina: fairyOcarinaReducer,
    fireArrows: fireArrowsReducer,
    dekuShield: dekuShieldReducer
});