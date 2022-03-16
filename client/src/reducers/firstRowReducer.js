import { 
    ADD_DEKU_STICKS,
    REMOVE_DEKU_STICKS,
    ADD_DEKU_NUTS,
    REMOVE_DEKU_NUTS,
    ADD_BOMBS,
    REMOVE_BOMBS,
    ADD_FAIRY_BOW,
    REMOVE_FAIRY_BOW,
    ADD_FIRE_ARROWS,
    REMOVE_FIRE_ARROWS,
    ADD_DINS_FIRE,
    REMOVE_DINS_FIRE,
    ADD_KOKIRI_SWORD,
    REMOVE_KOKIRI_SWORD
} from "../actions/types";

let INITIAL_STATE = {
    dekuSticks: 0,
    dekuNuts: 0,
    bombs: 0,
    fairyBow: 0,
    fireArrows: null,
    dinsFire: null,
    kokiriSword: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_DEKU_STICKS:
            return { ...state, dekuSticks: Math.min(30, state.dekuSticks + 10) };
        case REMOVE_DEKU_STICKS:
            return { ...state, dekuSticks: Math.max(0, state.dekuSticks - 10) };
        case ADD_DEKU_NUTS:
            if (state.dekuNuts === 0) {
                return { ...state, dekuNuts: Math.min(40, state.dekuNuts + 20) };
            } else {
                return { ...state, dekuNuts: Math.min(40, state.dekuNuts + 10) };
            }
        case REMOVE_DEKU_NUTS:
            if (state.dekuNuts === 20) {
                return { ...state, dekuNuts: Math.max(0, state.dekuNuts - 20) };
            } else {
                return { ...state, dekuNuts: Math.max(0, state.dekuNuts - 10) };
            }
        case ADD_BOMBS:
            if (state.bombs === 0) {
                return { ...state, bombs: Math.min(40, state.bombs + 20) };
            } else {
                return { ...state, bombs: Math.min(40, state.bombs + 10) };
            }
        case REMOVE_BOMBS:
            if (state.bombs === 20) {
                return { ...state, bombs: Math.max(0, state.bombs - 20) };
            } else {
                return { ...state, bombs: Math.max(0, state.bombs - 10) };
            }
        case ADD_FAIRY_BOW:
            if (state.fairyBow === 0) {
                return { ...state, fairyBow: Math.min(50, state.fairyBow + 30) };
            } else {
                return { ...state, fairyBow: Math.min(50, state.fairyBow + 10) };
            }
        case REMOVE_FAIRY_BOW:
            if (state.fairyBow === 30) {
                return { ...state, fairyBow: Math.max(0, state.fairyBow - 30) };
            } else {
                return { ...state, fairyBow: Math.max(0, state.fairyBow - 10) };
            }
        case ADD_FIRE_ARROWS:
            return { ...state, fireArrows: true };
        case REMOVE_FIRE_ARROWS:
            return { ...state, fireArrows: false };
        case ADD_DINS_FIRE:
            return { ...state, dinsFire: true };
        case REMOVE_DINS_FIRE:
            return { ...state, dinsFire: false };
        case ADD_KOKIRI_SWORD:
            return { ...state, kokiriSword: true };
        case REMOVE_KOKIRI_SWORD:
            return { ...state, kokiriSword: false };
        default:
            return state;
    }
};