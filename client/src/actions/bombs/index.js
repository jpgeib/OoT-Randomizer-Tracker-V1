import { ADD_BOMBS, REMOVE_BOMBS } from "../types";

export const addBombs = (e) => {
    console.log("added bombs");
    return {
        type: ADD_BOMBS
    };
};

export const removeBombs = (e) => {
    e.preventDefault();
    console.log("removed bombs");
    return {
        type: REMOVE_BOMBS    
    };
};