import { combineReducers } from "redux";

import dekuSticksReducer from "./dekuSticksReducer";
import dekuNutsReducer from "./dekuNutsReducer";
import bombsReducer from "./bombsReducer";
import fairyBowReducer from "./fairyBowReducer";
import fireArrowsReducer from "./fireArrowsReducer";
import dinsFireReducer from "./dinsFireReducer";
import kokiriSwordReducer from "./kokiriSwordReducer";
import biggoronSwordReducer from "./biggoronSwordReducer";
import fairySlingshotReducer from "./fairySlingshotReducer";
import fairyOcarinaReducer from "./fairyOcarinaReducer";
import ocarinaOfTimeReducer from "./ocarinaOfTimeReducer";
import bombchusReducer from "./bombchusReducer";
import dekuShieldReducer from "./dekuShieldReducer";
import skulltulaCounterReducer from "./skulltulaCounterReducer";

export default combineReducers({
    dekuSticks: dekuSticksReducer,
    dekuNuts: dekuNutsReducer,
    bombs: bombsReducer,
    fairyBow: fairyBowReducer,
    fireArrows: fireArrowsReducer,
    dinsFire: dinsFireReducer,
    kokiriSword: kokiriSwordReducer,
    biggoronSword: biggoronSwordReducer,
    fairySlingshot: fairySlingshotReducer,
    fairyOcarina: fairyOcarinaReducer,
    ocarinaOfTime: ocarinaOfTimeReducer,
    bombchus: bombchusReducer,
    dekuShield: dekuShieldReducer,
    skulltulaCounter: skulltulaCounterReducer
});