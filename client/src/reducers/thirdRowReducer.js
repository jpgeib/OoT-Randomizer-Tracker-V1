import { 
    ADD_HYLIAN_SHIELD, REMOVE_HYLIAN_SHIELD, 
    ADD_MIRROR_SHIELD, REMOVE_MIRROR_SHIELD,
    ADD_BOOMERANG, REMOVE_BOOMERANG,
    ADD_LENS_OF_TRUTH, REMOVE_LENS_OF_TRUTH,
    ADD_MAGIC_BEANS, REMOVE_MAGIC_BEANS,
    ADD_MEGATON_HAMMER, REMOVE_MEGATON_HAMMER,
    ADD_LIGHT_ARROWS, REMOVE_LIGHT_ARROWS,
    ADD_NAYRUS_LOVE, REMOVE_NAYRUS_LOVE
} from "../actions/types";

let INITIAL_STATE = {
    hylianShield: null,
    mirrorShield: null,
    boomerang: null,
    lensOfTruth: null,
    magicBeans: 0,
    megatonHammer: null,
    lightArrows: null,
    nayrusLove: null
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
        case ADD_BOOMERANG:
            return { ...state, boomerang: true };
        case REMOVE_BOOMERANG:
            return { ...state, boomerang: false };
        case ADD_LENS_OF_TRUTH:
            return { ...state, lensOfTruth: true };
        case REMOVE_LENS_OF_TRUTH:
            return { ...state, lensOfTruth: false };
        case ADD_MAGIC_BEANS:
            return { ...state, magicBeans: Math.min(10, state.magicBeans + 1) };
        case REMOVE_MAGIC_BEANS:
            return { ...state, magicBeans: Math.max(0, state.magicBeans - 1) };
        case ADD_MEGATON_HAMMER:
            return { ...state, megatonHammer: true };
        case REMOVE_MEGATON_HAMMER:
            return { ...state, megatonHammer: false };
        case ADD_LIGHT_ARROWS:
            return { ...state, lightArrows: true };
        case REMOVE_LIGHT_ARROWS:
            return { ...state, lightArrows: false };
        case ADD_NAYRUS_LOVE:
            return { ...state, nayrusLove: true };
        case REMOVE_NAYRUS_LOVE:
            return { ...state, nayrusLove: false };
        default:
            return state;
    }
};