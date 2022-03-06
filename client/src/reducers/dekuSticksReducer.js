import { ADD_DEKU_STICKS, REMOVE_DEKU_STICKS } from "../actions/types";

let INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_DEKU_STICKS:
            return Math.min(30, state + 10);   
        case REMOVE_DEKU_STICKS:
            return Math.max(0, state - 10);
        default:
            return state;
    }
};