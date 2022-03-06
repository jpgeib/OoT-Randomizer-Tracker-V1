import { ADD_FAIRY_OCARINA, REMOVE_FAIRY_OCARINA } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FAIRY_OCARINA:
            return state = true;
        case REMOVE_FAIRY_OCARINA:
            return state = false;
        default:
            return state;
    }
};