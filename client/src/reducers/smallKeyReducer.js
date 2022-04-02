import {
    ADD_FOREST_SMALL_KEY, REMOVE_FOREST_SMALL_KEY,
    ADD_FIRE_SMALL_KEY, REMOVE_FIRE_SMALL_KEY,
    ADD_WATER_SMALL_KEY, REMOVE_WATER_SMALL_KEY,
    ADD_SHADOW_SMALL_KEY, REMOVE_SHADOW_SMALL_KEY,
    ADD_SPIRIT_SMALL_KEY, REMOVE_SPIRIT_SMALL_KEY,
    ADD_WELL_SMALL_KEY, REMOVE_WELL_SMALL_KEY,
    ADD_FORTRESS_SMALL_KEY, REMOVE_FORTRESS_SMALL_KEY,
    ADD_TRAINING_SMALL_KEY, REMOVE_TRAINING_SMALL_KEY,
    ADD_GANON_SMALL_KEY, REMOVE_GANON_SMALL_KEY
} from "../actions/types";

let INITIAL_STATE = {
    forestKeys: 0,
    fireKeys: 0,
    waterKeys: 0,
    shadowKeys: 0,
    spiritKeys: 0,
    wellKeys: 0,
    fortressKeys: 0,
    trainingKeys: 0,
    ganonKeys: 0
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FOREST_SMALL_KEY:
            return { ...state, forestKeys: Math.min(5, state.forestKeys + 1) };
        case REMOVE_FOREST_SMALL_KEY:
            return { ...state, forestKeys: Math.max(0, state.forestKeys - 1) };
        case ADD_FIRE_SMALL_KEY:
            return { ...state, fireKeys: Math.min(8, state.fireKeys + 1) };
        case REMOVE_FIRE_SMALL_KEY:
            return { ...state, fireKeys: Math.max(0, state.fireKeys - 1) };
        case ADD_WATER_SMALL_KEY:
            return { ...state, waterKeys: Math.min(6, state.waterKeys + 1) };
        case REMOVE_WATER_SMALL_KEY:
            return { ...state, waterKeys: Math.max(0, state.waterKeys - 1) };
        case ADD_SHADOW_SMALL_KEY:
            return { ...state, shadowKeys: Math.min(5, state.shadowKeys + 1) };
        case REMOVE_SHADOW_SMALL_KEY:
            return { ...state, shadowKeys: Math.max(0, state.shadowKeys - 1) };
        case ADD_SPIRIT_SMALL_KEY:
            return { ...state, spiritKeys: Math.min(5, state.spiritKeys + 1) };
        case REMOVE_SPIRIT_SMALL_KEY:
            return { ...state, spiritKeys: Math.max(0, state.spiritKeys - 1) };
        case ADD_WELL_SMALL_KEY:
            return { ...state, wellKeys: Math.min(3, state.wellKeys + 1) };
        case REMOVE_WELL_SMALL_KEY:
            return { ...state, wellKeys: Math.max(0, state.wellKeys - 1) };
        case ADD_FORTRESS_SMALL_KEY:
            return { ...state, fortressKeys: Math.min(4, state.fortressKeys + 1) };
        case REMOVE_FORTRESS_SMALL_KEY:
            return { ...state, fortressKeys: Math.max(0, state.fortressKeys - 1) };
        case ADD_TRAINING_SMALL_KEY:
            return { ...state, trainingKeys: Math.min(9, state.trainingKeys + 1) };
        case REMOVE_TRAINING_SMALL_KEY:
            return { ...state, trainingKeys: Math.max(0, state.trainingKeys - 1) };
        case ADD_GANON_SMALL_KEY:
            return { ...state, ganonKeys: Math.min(2, state.ganonKeys + 1) };
        case REMOVE_GANON_SMALL_KEY:
            return { ...state, ganonKeys: Math.max(0, state.ganonKeys - 1) };
        default:
            return state;
    }
};