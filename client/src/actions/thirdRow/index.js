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

//Boomerang Actions
export const addBoomerang = (e) => {
    console.log("added boomerang");
    return {
        type: ADD_BOOMERANG
    };
};

export const removeBoomerang = (e) => {
    e.preventDefault();
    console.log("removed boomerang");
    return {
        type: REMOVE_BOOMERANG    
    };
};

//Lens of Truth Actions
export const addLensOfTruth = (e) => {
    console.log("added lens of truth");
    return {
        type: ADD_LENS_OF_TRUTH
    };
};

export const removeLensOfTruth = (e) => {
    e.preventDefault();
    console.log("removed lens of truth");
    return {
        type: REMOVE_LENS_OF_TRUTH    
    };
};

//Magic Beans Actions
export const addMagicBeans = (e) => {
    console.log("added magic beans");
    return {
        type: ADD_MAGIC_BEANS
    };
};

export const removeMagicBeans = (e) => {
    e.preventDefault();
    console.log("removed magic beans");
    return {
        type: REMOVE_MAGIC_BEANS    
    };
};

//Megaton Hammer Actions
export const addMegatonHammer = (e) => {
    console.log("added megaton hammer");
    return {
        type: ADD_MEGATON_HAMMER
    };
};

export const removeMegatonHammer = (e) => {
    e.preventDefault();
    console.log("removed megaton hammer");
    return {
        type: REMOVE_MEGATON_HAMMER    
    };
};

//Light Arrows Actions
export const addLightArrows = (e) => {
    console.log("added light arrows");
    return {
        type: ADD_LIGHT_ARROWS
    };
};

export const removeLightArrows = (e) => {
    e.preventDefault();
    console.log("removed light arrows");
    return {
        type: REMOVE_LIGHT_ARROWS    
    };
};

//Nayru's Love Actions
export const addNayrusLove = (e) => {
    console.log("added nayru's love");
    return {
        type: ADD_NAYRUS_LOVE
    };
};

export const removeNayrusLove = (e) => {
    e.preventDefault();
    console.log("removed nayru's love");
    return {
        type: REMOVE_NAYRUS_LOVE    
    };
};