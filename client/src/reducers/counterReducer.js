import { INCREMENT, DECREMENT } from "../actions/types";

export default function (state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return Math.min(100, state + 1);
        case DECREMENT:
            return Math.max(0, state - 1);
        default:
            return state;
    }
};