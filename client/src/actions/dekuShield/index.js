import { ADD_DEKU_SHIELD, REMOVE_DEKU_SHIELD } from "../types";

export const addDekuShield = (e) => {
    console.log("added deku shield");
    return {
        type: ADD_DEKU_SHIELD
    };
};

export const removeDekuShield = (e) => {
    e.preventDefault();
    console.log("removed deku shield");
    return {
        type: REMOVE_DEKU_SHIELD    
    };
};
