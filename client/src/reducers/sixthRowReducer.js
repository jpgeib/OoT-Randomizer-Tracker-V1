import {
    ADD_STONE_OF_AGONY, REMOVE_STONE_OF_AGONY,
    ADD_PIECE_OF_HEART, REMOVE_PIECE_OF_HEART,
    ADD_HEART_CONTAINER, REMOVE_HEART_CONTAINER,
    ADD_DOUBLE_DEFENSE, REMOVE_DOUBLE_DEFENSE
} from "../actions/types";

let INITIAL_STATE = {
    stoneOfAgony: null,
    piecesOfHeart: 0,
    heartContainers: 0,
    doubleDefense: null
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_STONE_OF_AGONY:
            return { ...state, stoneOfAgony: true };
        case REMOVE_STONE_OF_AGONY:
            return { ...state, stoneOfAgony: false };
        case ADD_PIECE_OF_HEART:
            return { ...state, piecesOfHeart: Math.min(36, state.piecesOfHeart + 1) };
        case REMOVE_PIECE_OF_HEART:
            return { ...state, piecesOfHeart: Math.max(0, state.piecesOfHeart - 1) };
        case ADD_HEART_CONTAINER:
            return { ...state, heartContainers: Math.min(8, state.heartContainers + 1) };
        case REMOVE_HEART_CONTAINER:
            return { ...state, heartContainers: Math.max(0, state.heartContainers - 1) };
        case ADD_DOUBLE_DEFENSE:
            return { ...state, doubleDefense: true };
        case REMOVE_DOUBLE_DEFENSE:
            return { ...state, doubleDefense: false };
        default:
            return state;
    }
};