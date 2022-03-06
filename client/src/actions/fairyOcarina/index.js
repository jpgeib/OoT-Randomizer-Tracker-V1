import { ADD_FAIRY_OCARINA, REMOVE_FAIRY_OCARINA } from "../types";

export const addFairyOcarina = (e) => {
    console.log("added fairy ocarina");
    return {
        type: ADD_FAIRY_OCARINA
    };
};

export const removeFairyOcarina = (e) => {
    e.preventDefault();
    console.log("removed fairy ocarina");
    return {
        type: REMOVE_FAIRY_OCARINA    
    };
};