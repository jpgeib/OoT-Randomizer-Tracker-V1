import { combineReducers } from "redux";

import firstRowReducer from "./firstRowReducer";
import secondRowReducer from "./secondRowReducer";
import thirdRowReducer from "./thirdRowReducer";
import fourthRowReducer from "./fourthRowReducer";
import fifthRowReducer from "./fifthRowReducer";
import sixthRowReducer from "./sixthRowReducer";
import walletReducer from "./walletReducer";
import smallKeyReducer from "./smallKeyReducer";
import bossKeyReducer from "./bossKeyReducer";
import gemReducer from "./gemReducer";
import medallionReducer from "./medallionReducer";

import inventoryReducer from "./inventoryReducer";

export default combineReducers({
    firstRow: firstRowReducer,
    secondRow: secondRowReducer,
    thirdRow: thirdRowReducer,
    fourthRow: fourthRowReducer,
    fifthRow: fifthRowReducer,
    sixthRow: sixthRowReducer,
    wallet: walletReducer,
    smallKeys: smallKeyReducer,
    bossKeys: bossKeyReducer,
    gems: gemReducer,
    medallions: medallionReducer,
    inventory: inventoryReducer
});