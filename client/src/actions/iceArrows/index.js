import { ADD_ICE_ARROWS, REMOVE_ICE_ARROWS } from "../types";

export const addIceArrows = (e) => {
    console.log("added ice arrows");
    return {
        type: ADD_ICE_ARROWS
    };
};

export const removeIceArrows = (e) => {
    e.preventDefault();
    console.log("removed ice arrows");
    return {
        type: REMOVE_ICE_ARROWS    
    };
};