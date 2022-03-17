import {
    ADD_BIGGORON_SWORD,
    REMOVE_BIGGORON_SWORD,
    ADD_FAIRY_SLINGSHOT,
    REMOVE_FAIRY_SLINGSHOT,
    ADD_FAIRY_OCARINA,
    REMOVE_FAIRY_OCARINA,
    ADD_OCARINA_OF_TIME,
    REMOVE_OCARINA_OF_TIME,
    ADD_BOMBCHUS,
    REMOVE_BOMBCHUS,
    ADD_HOOKSHOT,
    REMOVE_HOOKSHOT,
    ADD_LONGSHOT,
    REMOVE_LONGSHOT,
    ADD_ICE_ARROWS,
    REMOVE_ICE_ARROWS,
    ADD_FARORES_WIND,
    REMOVE_FARORES_WIND,
    ADD_DEKU_SHIELD,
    REMOVE_DEKU_SHIELD
} from "../types";

//Biggoron Sword Actions
export const addBiggoronSword = (e) => {
    console.log("added biggoron sword");
    return {
        type: ADD_BIGGORON_SWORD
    };
};

export const removeBiggoronSword = (e) => {
    e.preventDefault();
    console.log("removed biggoron sword");
    return {
        type: REMOVE_BIGGORON_SWORD    
    };
};

//Fairy Slingshot Actions
export const addFairySlingshot = (e) => {
    console.log("added fairy slingshot");
    return {
        type: ADD_FAIRY_SLINGSHOT
    };
};

export const removeFairySlingshot = (e) => {
    e.preventDefault();
    console.log("removed fairy slingshot");
    return {
        type: REMOVE_FAIRY_SLINGSHOT    
    };
};

//Ocarina Actions
export const addFairyOcarina = (e) => {
    console.log("added fairy ocarina");
    return {
        type: ADD_FAIRY_OCARINA
    };
};

export const removeFairyOcarina = (e) => {
    e.preventDefault();
    console.log("removed fairy ocarina");
    return {
        type: REMOVE_FAIRY_OCARINA    
    };
};

export const addOcarinaOfTime = (e) => {
    console.log("added ocarina of time");
    return {
        type: ADD_OCARINA_OF_TIME
    };
};

export const removeOcarinaOfTime = (e) => {
    e.preventDefault();
    console.log("removed ocarina of time");
    return {
        type: REMOVE_OCARINA_OF_TIME    
    };
};

//Bombchus Actions
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

//Hookshot Actions
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

//Ice Arrows Actions
export const addIceArrows = (e) => {
    console.log("added ice arrows");
    return {
        type: ADD_ICE_ARROWS
    };
};

export const removeIceArrows = (e) => {
    e.preventDefault();
    console.log("removed ice arrows");
    return {
        type: REMOVE_ICE_ARROWS    
    };
};

//Farore's Wind Actions
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

//Deku Shield Actions
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