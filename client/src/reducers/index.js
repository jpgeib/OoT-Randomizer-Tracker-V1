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
import hookshotReducer from "./hookshotReducer";
import longshotReducer from "./longshotReducer";
import iceArrowsReducer from "./iceArrowsReducer";
import faroresWindReducer from "./faroresWindReducer";
import dekuShieldReducer from "./dekuShieldReducer";
import firstRowReducer from "./firstRowReducer";
import thirdRowReducer from "./thirdRowReducer";
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
    hookshot: hookshotReducer,
    longshot: longshotReducer,
    iceArrows: iceArrowsReducer,
    faroresWind: faroresWindReducer,
    dekuShield: dekuShieldReducer,
    firstRow: firstRowReducer,
    thirdRow: thirdRowReducer,
    skulltulaCounter: skulltulaCounterReducer
});