import { ADD_OCARINA_OF_TIME, REMOVE_OCARINA_OF_TIME } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_OCARINA_OF_TIME:
            return state = true;
        case REMOVE_OCARINA_OF_TIME:
            return state = false;
        default:
            return state;
    }
};