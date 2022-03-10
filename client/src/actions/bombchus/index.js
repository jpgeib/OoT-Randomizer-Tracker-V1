import { ADD_BOMBCHUS, REMOVE_BOMBCHUS } from "../types";

export const addBombchus = (e) => {
    console.log("added bombchus");
    return {
        type: ADD_BOMBCHUS
    };
};

export const removeBombchus = (e) => {
    e.preventDefault();
    console.log("removed bombchus");
    return {
        type: REMOVE_BOMBCHUS    
    };
};