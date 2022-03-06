import { combineReducers } from "redux";

import dekuSticksReducer from "./dekuSticksReducer";
import dekuNutsReducer from "./dekuNutsReducer";
import bombsReducer from "./bombsReducer";
import fairyBowReducer from "./fairyBowReducer";
import fairySlingshotReducer from "./fairySlingshotReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import ocarinaOfTimeReducer from "./ocarinaOfTimeReducer";
import fireArrowsReducer from "./fireArrowsReducer";
import dekuShieldReducer from "./dekuShieldReducer";
import skulltulaCounterReducer from "./skulltulaCounterReducer";

export default combineReducers({
    dekuSticks: dekuSticksReducer,
    dekuNuts: dekuNutsReducer,
    bombs: bombsReducer,
    fairyBow: fairyBowReducer,
    fairySlingshot: fairySlingshotReducer,
    fairyOcarina: fairyOcarinaReducer,
    ocarinaOfTime: ocarinaOfTimeReducer,
    fireArrows: fireArrowsReducer,
    dekuShield: dekuShieldReducer,
    skulltulaCounter: skulltulaCounterReducer
});