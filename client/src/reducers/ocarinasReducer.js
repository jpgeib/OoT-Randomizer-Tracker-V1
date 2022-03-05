import { ADD_FAIRY_OCARINA, REMOVE_FAIRY_OCARINA, ADD_OCARINA_OF_TIME, REMOVE_OCARINA_OF_TIME } from "../actions/types";

let INITIAL_STATE = {
    fairyOcarina: null,
    ocarinaOfTime: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FAIRY_OCARINA:
            return state.fairyOcarina = true;
        case REMOVE_FAIRY_OCARINA:
            return state.fairyOcarina = false;
        case ADD_OCARINA_OF_TIME:
            return state.ocarinaOfTime = true;
        case REMOVE_OCARINA_OF_TIME:
            return state.ocarinaOfTime = false;
        default:
            return state;
    }
};