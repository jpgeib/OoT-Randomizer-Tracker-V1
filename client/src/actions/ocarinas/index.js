import {
    ADD_FAIRY_OCARINA,
    REMOVE_FAIRY_OCARINA,
    ADD_OCARINA_OF_TIME,
    REMOVE_OCARINA_OF_TIME
} from "../types";

export const addFairyOcarina = () => {
    return {
        type: ADD_FAIRY_OCARINA
    };
};

export const removeFairyOcarina = (e) => {
    e.preventDefault();
    return {
        type: REMOVE_FAIRY_OCARINA
    };
};

export const addOcarinaOfTime = () => {
    return {
        type: ADD_OCARINA_OF_TIME
    };
};

export const removeOcarinaOfTime = () => {
    return {
        type: REMOVE_OCARINA_OF_TIME
    };
};