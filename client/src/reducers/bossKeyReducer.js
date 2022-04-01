import {
    ADD_FOREST_BOSS_KEY, REMOVE_FOREST_BOSS_KEY,
    ADD_FIRE_BOSS_KEY, REMOVE_FIRE_BOSS_KEY,
    ADD_WATER_BOSS_KEY, REMOVE_WATER_BOSS_KEY,
    ADD_SHADOW_BOSS_KEY, REMOVE_SHADOW_BOSS_KEY,
    ADD_SPIRIT_BOSS_KEY, REMOVE_SPIRIT_BOSS_KEY,
    ADD_GANON_BOSS_KEY, REMOVE_GANON_BOSS_KEY
} from "../actions/types";

let INITIAL_STATE = {
    forestBossKey: null,
    fireBossKey: null,
    waterBossKey: null,
    shadowBossKey: null,
    spiritBossKey: null,
    ganonBossKey: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FOREST_BOSS_KEY:
            return { ...state, forestBossKey: true };
        case REMOVE_FOREST_BOSS_KEY:
            return { ...state, forestBossKey: false };
        case ADD_FIRE_BOSS_KEY:
            return { ...state, fireBossKey: true };
        case REMOVE_FIRE_BOSS_KEY:
            return { ...state, fireBossKey: false };
        case ADD_WATER_BOSS_KEY:
            return { ...state, waterBossKey: true };
        case REMOVE_WATER_BOSS_KEY:
            return { ...state, waterBossKey: false };
        case ADD_SHADOW_BOSS_KEY:
            return { ...state, shadowBossKey: true };
        case REMOVE_SHADOW_BOSS_KEY:
            return { ...state, shadowBossKey: false };
        case ADD_SPIRIT_BOSS_KEY:
            return { ...state, spiritBossKey: true };
        case REMOVE_SPIRIT_BOSS_KEY:
            return { ...state, spiritBossKey: false };
        case ADD_GANON_BOSS_KEY:
            return { ...state, ganonBossKey: true };
        case REMOVE_GANON_BOSS_KEY:
            return { ...state, ganonBossKey: false };
        default:
            return state;
    }
}