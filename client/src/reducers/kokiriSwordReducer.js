import { ADD_KOKIRI_SWORD, REMOVE_KOKIRI_SWORD } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_KOKIRI_SWORD:
            return state = true;
        case REMOVE_KOKIRI_SWORD:
            return state = false;
        default:
            return state;
    }
};