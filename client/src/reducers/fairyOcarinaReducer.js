import { ADD_FAIRY_OCARINA, REMOVE_FAIRY_OCARINA } from "../actions/types";

let INITIAL_STATE = false;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FAIRY_OCARINA:
            return state = false;
        case REMOVE_FAIRY_OCARINA:
            return state = true;
        default:
            return state;
    }
};