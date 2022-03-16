import { ADD_HYLIAN_SHIELD, REMOVE_HYLIAN_SHIELD, ADD_MIRROR_SHIELD, REMOVE_MIRROR_SHIELD } from "../actions/types";

let INITIAL_STATE = {
    hylianShield: null,
    mirrorShield: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_HYLIAN_SHIELD:
            return { ...state, hylianShield: true };
        case REMOVE_HYLIAN_SHIELD:
            return { ...state, hylianShield: false };
        case ADD_MIRROR_SHIELD:
            return { ...state, mirrorShield: true };
        case REMOVE_MIRROR_SHIELD:
            return { ...state, mirrorShield: false };
        default:
            return state;
    }
};