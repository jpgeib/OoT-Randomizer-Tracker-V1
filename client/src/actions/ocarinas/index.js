import {
    ADD_FAIRY_OCARINA,
    REMOVE_FAIRY_OCARINA,
    ADD_OCARINA_OF_TIME,
    REMOVE_OCARINA_OF_TIME
} from "../types";

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