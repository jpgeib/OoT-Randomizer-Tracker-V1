import { ADD_OCARINA_OF_TIME, REMOVE_OCARINA_OF_TIME } from "../types";

export const addOcarinaOfTime = (e) => {
    console.log("added ocarina of time");
    return {
        type: ADD_OCARINA_OF_TIME
    };
};

export const removeOcarinaOfTime = (e) => {
    e.preventDefault();
    console.log("removed ocarina of time");
    return {
        type: REMOVE_OCARINA_OF_TIME    
    };
};