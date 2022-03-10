import { ADD_BOMBCHUS, REMOVE_BOMBCHUS } from "../actions/types";

let INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_BOMBCHUS:
            if (state === 0) {
                return Math.min(40, state + 20);
            } else {
                return Math.min(40, state + 10);
            }    
        case REMOVE_BOMBCHUS:
            if (state === 20) {
                return Math.max(0, state - 20);
            } else {
                return Math.max(0, state - 10);
            }
        default:
            return state;
    }
};