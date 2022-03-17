import {
    ADD_BIGGORON_SWORD,
    REMOVE_BIGGORON_SWORD,
    ADD_FAIRY_SLINGSHOT,
    REMOVE_FAIRY_SLINGSHOT,
    ADD_FAIRY_OCARINA,
    REMOVE_FAIRY_OCARINA,
    ADD_OCARINA_OF_TIME,
    REMOVE_OCARINA_OF_TIME,
    ADD_BOMBCHUS,
    REMOVE_BOMBCHUS,
    ADD_HOOKSHOT,
    REMOVE_HOOKSHOT,
    ADD_LONGSHOT,
    REMOVE_LONGSHOT,
    ADD_ICE_ARROWS,
    REMOVE_ICE_ARROWS,
    ADD_FARORES_WIND,
    REMOVE_FARORES_WIND,
    ADD_DEKU_SHIELD,
    REMOVE_DEKU_SHIELD
} from "../actions/types";

let INITIAL_STATE = {
    biggoronSword: null,
    fairySlingshot: 0,
    fairyOcarina: null,
    ocarinaOfTime: null,
    bombchus: 0,
    hookshot: null,
    longshot: null,
    iceArrows: null,
    faroresWind: null,
    dekuShield: null
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_BIGGORON_SWORD:
            return { ...state, biggoronSword: true };
        case REMOVE_BIGGORON_SWORD:
            return { ...state, biggoronSword: false };
        case ADD_FAIRY_SLINGSHOT:
            if (state.fairySlingshot === 0) {
                return { ...state, fairySlingshot: Math.min(50, state.fairySlingshot + 30) };
            } else {
                return { ...state, fairySlingshot: Math.min(50, state.fairySlingshot + 10) };
            }    
        case REMOVE_FAIRY_SLINGSHOT:
            if (state.fairySlingshot === 30) {
                return { ...state, fairySlingshot: Math.max(0, state.fairySlingshot - 30) };
            } else {
                return { ...state, fairySlingshot: Math.max(0, state.fairySlingshot - 10) };
            }
        case ADD_FAIRY_OCARINA:
            return { ...state, fairyOcarina: true };
        case REMOVE_FAIRY_OCARINA:
            return { ...state, fairyOcarina: false };
        case ADD_OCARINA_OF_TIME:
            return { ...state, ocarinaOfTime: true };
        case REMOVE_OCARINA_OF_TIME:
            return { ...state, ocarinaOfTime: false };
        case ADD_BOMBCHUS:
            if (state.bombchus === 0) {
                return { ...state, bombchus: Math.min(40, state.bombchus + 20) };
            } else {
                return { ...state, bombchus: Math.min(40, state.bombchus + 10) };
            }
        case REMOVE_BOMBCHUS:
            if (state === 20) {
                return { ...state, bombchus: Math.max(0, state.bombchus - 20) };
            } else {
                return { ...state, bombchus: Math.max(0, state.bombchus - 10) };
            }
        case ADD_HOOKSHOT:
            return { ...state, hookshot: true };
        case REMOVE_HOOKSHOT:
            return { ...state, hookshot: false };
        case ADD_LONGSHOT:
            return { ...state, longshot: true };
        case REMOVE_LONGSHOT:
            return { ...state, longshot: false };
        case ADD_ICE_ARROWS:
            return { ...state, iceArrows: true };
        case REMOVE_ICE_ARROWS:
            return { ...state, iceArrows: false };
        case ADD_FARORES_WIND:
            return { ...state, faroresWind: true };
        case REMOVE_FARORES_WIND:
            return { ...state, faroresWind: false };
        case ADD_DEKU_SHIELD:
            return { ...state, dekuShield: true };
        case REMOVE_DEKU_SHIELD:
            return { ...state, dekuShield: false };
        default:
            return state;
    }
}