import { ADD_DINS_FIRE, REMOVE_DINS_FIRE } from "../actions/types";

let INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_DINS_FIRE:
            return state = true;
        case REMOVE_DINS_FIRE:
            return state = false;
        default:
            return state;
    }
};