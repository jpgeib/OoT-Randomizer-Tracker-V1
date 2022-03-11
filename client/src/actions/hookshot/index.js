import { ADD_HOOKSHOT, REMOVE_HOOKSHOT } from "../types";

export const addHookshot = (e) => {
    console.log("added hookshot");
    return {
        type: ADD_HOOKSHOT
    };
};

export const removeHookshot = (e) => {
    e.preventDefault();
    console.log("removed hookshot");
    return {
        type: REMOVE_HOOKSHOT    
    };
};