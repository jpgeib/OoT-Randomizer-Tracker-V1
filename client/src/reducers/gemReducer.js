import {
    ADD_KOKIRI_EMERALD, REMOVE_KOKIRI_EMERALD,
    ADD_GORON_RUBY, REMOVE_GORON_RUBY,
    ADD_ZORA_SAPPHIRE, REMOVE_ZORA_SAPPHIRE
} from "../actions/types";

let INITIAL_STATE = {
    kokiriEmerald: null,
    goronRuby: null,
    zoraSapphire: null
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_KOKIRI_EMERALD:
            return { ...state, kokiriEmerald: true };
        case REMOVE_KOKIRI_EMERALD:
            return { ...state, kokiriEmerald: false };
        case ADD_GORON_RUBY:
            return { ...state, goronRuby: true };
        case REMOVE_GORON_RUBY:
            return { ...state, goronRuby: false };
        case ADD_ZORA_SAPPHIRE:
            return { ...state, zoraSapphire: true };
        case REMOVE_ZORA_SAPPHIRE:
            return { ...state, zoraSapphire: false };
        default:
            return state;
    }
};