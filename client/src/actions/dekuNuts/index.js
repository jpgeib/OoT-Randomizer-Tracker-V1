import { ADD_DEKU_NUTS, REMOVE_DEKU_NUTS } from "../types";

export const addDekuNuts = (e) => {
    console.log("added deku nuts");
    return {
        type: ADD_DEKU_NUTS
    };
};

export const removeDekuNuts = (e) => {
    e.preventDefault();
    console.log("removed deku nuts");
    return {
        type: REMOVE_DEKU_NUTS    
    };
};