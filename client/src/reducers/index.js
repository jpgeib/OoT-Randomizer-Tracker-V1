import { combineReducers } from "redux";

import firstRowReducer from "./firstRowReducer";
import secondRowReducer from "./secondRowReducer";
import thirdRowReducer from "./thirdRowReducer";
import fourthRowReducer from "./fourthRowReducer";
import walletReducer from "./walletReducer";

export default combineReducers({
    firstRow: firstRowReducer,
    secondRow: secondRowReducer,
    thirdRow: thirdRowReducer,
    fourthRow: fourthRowReducer,
    wallet: walletReducer
});