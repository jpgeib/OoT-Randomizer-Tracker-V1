import {
    ADD_LIGHT_MEDALLION, REMOVE_LIGHT_MEDALLION,
    ADD_FOREST_MEDALLION, REMOVE_FOREST_MEDALLION,
    ADD_FIRE_MEDALLION, REMOVE_FIRE_MEDALLION,
    ADD_WATER_MEDALLION, REMOVE_WATER_MEDALLION,
    ADD_SHADOW_MEDALLION, REMOVE_SHADOW_MEDALLION,
    ADD_SPIRIT_MEDALLION, REMOVE_SPIRIT_MEDALLION
} from "../actions/types";

let INITIAL_STATE = {
    lightMedallion: null,
    forestMedallion: null,
    fireMedallion: null,
    waterMedallion: null,
    shadowMedallion: null,
    spiritMedallion: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_LIGHT_MEDALLION:
            return { ...state, lightMedallion: true };
        case REMOVE_LIGHT_MEDALLION:
            return { ...state, lightMedallion: false };
        case ADD_FOREST_MEDALLION:
            return { ...state, forestMedallion: true };
        case REMOVE_FOREST_MEDALLION:
            return { ...state, forestMedallion: false };
        case ADD_FIRE_MEDALLION:
            return { ...state, fireMedallion: true };
        case REMOVE_FIRE_MEDALLION:
            return { ...state, fireMedallion: false };
        case ADD_WATER_MEDALLION:
            return { ...state, waterMedallion: true };
        case REMOVE_WATER_MEDALLION:
            return { ...state, waterMedallion: false };
        case ADD_SHADOW_MEDALLION:
            return { ...state, shadowMedallion: true };
        case REMOVE_SHADOW_MEDALLION:
            return { ...state, shadowMedallion: false };
        case ADD_SPIRIT_MEDALLION:
            return { ...state, spiritMedallion: true };
        case REMOVE_SPIRIT_MEDALLION:
            return { ...state, spiritMedallion: false };
        default:
            return state;
    }
};