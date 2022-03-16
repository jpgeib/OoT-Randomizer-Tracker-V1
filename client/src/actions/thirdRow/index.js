import { ADD_HYLIAN_SHIELD, REMOVE_HYLIAN_SHIELD, ADD_MIRROR_SHIELD, REMOVE_MIRROR_SHIELD } from "../types";

//Hylian Shield Functions
export const addHylianShield = (e) => {
    console.log("added hylian shield");
    return {
        type: ADD_HYLIAN_SHIELD
    };
};

export const removeHylianShield = (e) => {
    e.preventDefault();
    console.log("removed hylian shield");
    return {
        type: REMOVE_HYLIAN_SHIELD    
    };
};

//Mirror Shield Functions
export const addMirrorShield = (e) => {
    console.log("added mirror shield");
    return {
        type: ADD_MIRROR_SHIELD
    };
};

export const removeMirrorShield = (e) => {
    e.preventDefault();
    console.log("removed mirror shield");
    return {
        type: REMOVE_MIRROR_SHIELD    
    };
};