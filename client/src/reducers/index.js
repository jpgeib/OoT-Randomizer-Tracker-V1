import { combineReducers } from "redux";

import dekuSticksReducer from "./dekuSticksReducer";
import dekuNutsReducer from "./dekuNutsReducer";
import bombsReducer from "./bombsReducer";
import fairyBowReducer from "./fairyBowReducer";
import fireArrowsReducer from "./fireArrowsReducer";
import kokiriSwordReducer from "./kokiriSwordReducer";
import fairySlingshotReducer from "./fairySlingshotReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import ocarinaOfTimeReducer from "./ocarinaOfTimeReducer";
import dekuShieldReducer from "./dekuShieldReducer";
import skulltulaCounterReducer from "./skulltulaCounterReducer";

export default combineReducers({
    dekuSticks: dekuSticksReducer,
    dekuNuts: dekuNutsReducer,
    bombs: bombsReducer,
    fairyBow: fairyBowReducer,
    fireArrows: fireArrowsReducer,
    kokiriSword: kokiriSwordReducer,
    fairySlingshot: fairySlingshotReducer,
    fairyOcarina: fairyOcarinaReducer,
    ocarinaOfTime: ocarinaOfTimeReducer,
    dekuShield: dekuShieldReducer,
    skulltulaCounter: skulltulaCounterReducer
});