import { combineReducers } from "redux";
import skulltulaCounterReducer from "./skulltulaCounterReducer";
import sticksCounterReducer from "./sticksCounterReducer";
import fairySlingshotReducer from "./fairySlingshotReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import ocarinaOfTimeReducer from "./ocarinaOfTimeReducer";
import fireArrowsReducer from "./fireArrowsReducer";
import dekuShieldReducer from "./dekuShieldReducer";


export default combineReducers({
    skulltulaCounter: skulltulaCounterReducer,
    sticksCounter: sticksCounterReducer,
    fairySlingshot: fairySlingshotReducer,
    fairyOcarina: fairyOcarinaReducer,
    ocarinaOfTime: ocarinaOfTimeReducer,
    fireArrows: fireArrowsReducer,
    dekuShield: dekuShieldReducer
});