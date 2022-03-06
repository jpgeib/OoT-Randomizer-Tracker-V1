import { ADD_FAIRY_BOW, REMOVE_FAIRY_BOW } from "../types";

export const addFairyBow = (e) => {
    console.log("added fairy bow");
    return {
        type: ADD_FAIRY_BOW
    };
};

export const removeFairyBow = (e) => {
    e.preventDefault();
    console.log("removed fairy bow");
    return {
        type: REMOVE_FAIRY_BOW    
    };
};