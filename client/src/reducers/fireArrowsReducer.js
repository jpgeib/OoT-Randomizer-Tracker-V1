import { ADD_FIRE_ARROWS, REMOVE_FIRE_ARROWS } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_FIRE_ARROWS:
            return state = true;
        case REMOVE_FIRE_ARROWS:
            return state = false;
        default:
            return state;
    }
};