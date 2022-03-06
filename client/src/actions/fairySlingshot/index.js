import { ADD_FAIRY_SLINGSHOT, REMOVE_FAIRY_SLINGSHOT } from "../types";

export const addFairySlingshot = (e) => {
    console.log("added fairy slingshot");
    return {
        type: ADD_FAIRY_SLINGSHOT
    };
};

export const removeFairySlingshot = (e) => {
    e.preventDefault();
    console.log("removed fairy slingshot");
    return {
        type: REMOVE_FAIRY_SLINGSHOT    
    };
};