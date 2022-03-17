import { combineReducers } from "redux";

import firstRowReducer from "./firstRowReducer";
import secondRowReducer from "./secondRowReducer";
import thirdRowReducer from "./thirdRowReducer";
import skulltulaCounterReducer from "./skulltulaCounterReducer";

export default combineReducers({
    firstRow: firstRowReducer,
    secondRow: secondRowReducer,
    thirdRow: thirdRowReducer,
    skulltulaCounter: skulltulaCounterReducer
});