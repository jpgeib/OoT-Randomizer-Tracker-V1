import { ADD_DEKU_SHIELD, REMOVE_DEKU_SHIELD } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_DEKU_SHIELD:
            return state = true;
        case REMOVE_DEKU_SHIELD:
            return state = false;
        default:
            return state;
    }
};