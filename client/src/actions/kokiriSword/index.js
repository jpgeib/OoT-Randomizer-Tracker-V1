import { ADD_KOKIRI_SWORD, REMOVE_KOKIRI_SWORD } from "../types";

export const addKokiriSword = (e) => {
    console.log("added kokiri sword");
    return {
        type: ADD_KOKIRI_SWORD
    };
};

export const removeKokiriSword = (e) => {
    e.preventDefault();
    console.log("removed kokiri sword");
    return {
        type: REMOVE_KOKIRI_SWORD    
    };
};