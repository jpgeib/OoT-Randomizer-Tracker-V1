import { ADD_FAIRY_OCARINA, REMOVE_FAIRY_OCARINA } from "../actions/types";

const INITIAL_STATE = {
    fairyOcarina: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FAIRY_OCARINA:
            return { ...state, fairyOcarina: action.payload };
        case REMOVE_FAIRY_OCARINA:
            return { ...state, fairyOcarina: action.payload};
        default:
            return state;
    }
};