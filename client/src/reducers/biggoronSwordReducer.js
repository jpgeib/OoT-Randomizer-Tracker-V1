import { ADD_BIGGORON_SWORD, REMOVE_BIGGORON_SWORD } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_BIGGORON_SWORD:
            return state = true;
        case REMOVE_BIGGORON_SWORD:
            return state = false;
        default:
            return state;
    }
};