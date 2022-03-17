import { 
    ADD_HYLIAN_SHIELD, REMOVE_HYLIAN_SHIELD, 
    ADD_MIRROR_SHIELD, REMOVE_MIRROR_SHIELD,
    ADD_BOOMERANG, REMOVE_BOOMERANG,
    ADD_LENS_OF_TRUTH, REMOVE_LENS_OF_TRUTH,
    ADD_MAGIC_BEANS, REMOVE_MAGIC_BEANS,
    ADD_MEGATON_HAMMER, REMOVE_MEGATON_HAMMER,
    ADD_LIGHT_ARROWS, REMOVE_LIGHT_ARROWS,
    ADD_NAYRUS_LOVE, REMOVE_NAYRUS_LOVE
} from "../types";

//Hylian Shield Actions
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

//Mirror Shield Actions
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