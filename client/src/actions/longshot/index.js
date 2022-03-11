import { ADD_LONGSHOT, REMOVE_LONGSHOT } from "../types";

export const addLongshot = (e) => {
    console.log("added longshot");
    return {
        type: ADD_LONGSHOT
    };
};

export const removeLongshot = (e) => {
    e.preventDefault();
    console.log("removed longshot");
    return {
        type: REMOVE_LONGSHOT   
    };
};