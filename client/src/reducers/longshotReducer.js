import { ADD_LONGSHOT, REMOVE_LONGSHOT } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_LONGSHOT:
            return state = true;
        case REMOVE_LONGSHOT:
            return state = false;
        default:
            return state;
    }
};