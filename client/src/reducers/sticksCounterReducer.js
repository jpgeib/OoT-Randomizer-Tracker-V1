import { ADD_DEKU_STICKS, REMOVE_DEKU_STICKS } from "../actions/types";

export default function (state = 0, action) {
    switch (action.type) {
        case ADD_DEKU_STICKS:
            return Math.min(30, state + 10);
        case REMOVE_DEKU_STICKS:
            return Math.max(0, state - 10);
    }
};