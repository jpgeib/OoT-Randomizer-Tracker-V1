import { ADD_FIRE_ARROWS, REMOVE_FIRE_ARROWS } from "../types";

export const addFireArrows = (e) => {
    console.log("added");
    return {
        type: ADD_FIRE_ARROWS
    };
};

export const removeFireArrows = (e) => {
    e.preventDefault();
    console.log("removed");
    return {
        type: REMOVE_FIRE_ARROWS    
    };
};