import { ADD_DEKU_STICKS, REMOVE_DEKU_STICKS } from "../types";

export const addDekuSticks = (e) => {
    console.log("added deku sticks");
    return {
        type: ADD_DEKU_STICKS
    };
};

export const removeDekuSticks = (e) => {
    e.preventDefault();
    console.log("removed deku sticks");
    return {
        type: REMOVE_DEKU_STICKS    
    };
};