import {
    ADD_STONE_OF_AGONY, REMOVE_STONE_OF_AGONY,
    ADD_PIECE_OF_HEART, REMOVE_PIECE_OF_HEART,
    ADD_HEART_CONTAINER, REMOVE_HEART_CONTAINER,
    ADD_DOUBLE_DEFENSE, REMOVE_DOUBLE_DEFENSE
} from "../types";

//Stone/Shard of Agony Actions
export const addStoneOfAgony = (e) => {
    console.log("added stone/shard of agony");
    return {
        type: ADD_STONE_OF_AGONY
    };
};

export const removeStoneOfAgony = (e) => {
    e.preventDefault();
    console.log("removed stone/shard of agony");
    return {
        type: REMOVE_STONE_OF_AGONY    
    };
};

//Piece of Heart Actions
export const addPieceOfHeart = (e) => {
    console.log("added piece of heart");
    return {
        type: ADD_PIECE_OF_HEART
    };
};

export const removePieceOfHeart = (e) => {
    e.preventDefault();
    console.log("removed piece of heart");
    return {
        type: REMOVE_PIECE_OF_HEART    
    };
};

//Heart Container Actions
export const addHeartContainer = (e) => {
    console.log("added heart container");
    return {
        type: ADD_HEART_CONTAINER
    };
};

export const removeHeartContainer = (e) => {
    e.preventDefault();
    console.log("removed heart container");
    return {
        type: REMOVE_HEART_CONTAINER    
    };
};

//Double Defense Actions
export const addDoubleDefense = (e) => {
    console.log("added double defense");
    return {
        type: ADD_DOUBLE_DEFENSE
    };
};

export const removeDoubleDefense = (e) => {
    e.preventDefault();
    console.log("removed double defense");
    return {
        type: REMOVE_DOUBLE_DEFENSE    
    };
};