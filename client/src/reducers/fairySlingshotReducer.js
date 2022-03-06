import { ADD_FAIRY_SLINGSHOT, REMOVE_FAIRY_SLINGSHOT } from "../actions/types";

let INITIAL_STATE = 0;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FAIRY_SLINGSHOT:
            if (state === 0) {
                return Math.min(50, state + 30);
            } else {
                return Math.min(50, state + 10);
            }    
        case REMOVE_FAIRY_SLINGSHOT:
            if (state === 30) {
                return Math.max(0, state - 30);
            } else {
                return Math.max(0, state - 10);
            }
        default:
            return state;
    }
};