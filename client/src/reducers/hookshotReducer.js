import { ADD_HOOKSHOT, REMOVE_HOOKSHOT } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_HOOKSHOT:
            return state = true;
        case REMOVE_HOOKSHOT:
            return state = false;
        default:
            return state;
    }
};