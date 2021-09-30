import { ADD_SKULLTULA, REMOVE_SKULLTULA } from "../actions/types";

export default function (state = 0, action) {
    switch (action.type) {
        case ADD_SKULLTULA:
            return Math.min(100, state + 1);
        case REMOVE_SKULLTULA:
            return Math.max(0, state - 1);
        default:
            return state;
    }
};