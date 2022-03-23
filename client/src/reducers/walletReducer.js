import { ADD_WALLET, REMOVE_WALLET } from "../actions/types";

let INITIAL_STATE = 99;

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_WALLET:
            if (state === 99) {
                return state + 101;
            } else if (state === 200) {
                return state + 300;
            } else if (state === 500) {
                return state + 499;
            } else {
                return state;
            }
        case REMOVE_WALLET:
            if (state === 200) {
                return state - 101;
            } else if (state === 500) {
                return state - 300;
            } else if (state === 999) {
                return state - 499;
            } else {
                return state;
            }
        default:
            return state;
    }
}