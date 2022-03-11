import { ADD_FARORES_WIND, REMOVE_FARORES_WIND } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FARORES_WIND:
            return state = true;
        case REMOVE_FARORES_WIND:
            return state = false;
        default:
            return state;
    }
};