import { ADD_FARORES_WIND, REMOVE_FARORES_WIND } from "../types";

export const addFaroresWind = (e) => {
    console.log("added farore's wind");
    return {
        type: ADD_FARORES_WIND
    };
};

export const removeFaroresWind = (e) => {
    e.preventDefault();
    console.log("removed farore's wind");
    return {
        type: REMOVE_FARORES_WIND    
    };
};