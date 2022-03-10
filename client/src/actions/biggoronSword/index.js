import { ADD_BIGGORON_SWORD, REMOVE_BIGGORON_SWORD } from "../types";

export const addBiggoronSword = (e) => {
    console.log("added biggoron sword");
    return {
        type: ADD_BIGGORON_SWORD
    };
};

export const removeBiggoronSword = (e) => {
    e.preventDefault();
    console.log("removed biggoron sword");
    return {
        type: REMOVE_BIGGORON_SWORD    
    };
};