import { ADD_ICE_ARROWS, REMOVE_ICE_ARROWS } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_ICE_ARROWS:
            return state = true;
        case REMOVE_ICE_ARROWS:
            return state = false;
        default:
            return state;
    }
};