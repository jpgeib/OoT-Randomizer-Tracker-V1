import {
    ADD_FAIRY_OCARINA,
    REMOVE_FAIRY_OCARINA,
    ADD_OCARINA_OF_TIME,
    REMOVE_OCARINA_OF_TIME
} from "../types";

export const addFairyOcarina = (e) => {
   return{
        type: ADD_FAIRY_OCARINA
    };
};

export const removeFairyOcarina = (e) => {
    e.preventDefault();
    return {
        type: REMOVE_FAIRY_OCARINA
    };
};

export const addOcarinaOfTime = (e) => {
    return {
        type: ADD_OCARINA_OF_TIME
    };
};

export const removeOcarinaOfTime = (e) => {
    e.preventDefault();
    return {
        type: REMOVE_OCARINA_OF_TIME     
    };
};