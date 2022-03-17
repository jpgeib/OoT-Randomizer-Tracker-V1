import { 
    ADD_DEKU_STICKS,
    REMOVE_DEKU_STICKS,
    ADD_DEKU_NUTS,
    REMOVE_DEKU_NUTS,
    ADD_BOMBS,
    REMOVE_BOMBS,
    ADD_FAIRY_BOW,
    REMOVE_FAIRY_BOW,
    ADD_FIRE_ARROWS,
    REMOVE_FIRE_ARROWS,
    ADD_DINS_FIRE,
    REMOVE_DINS_FIRE,
    ADD_KOKIRI_SWORD,
    REMOVE_KOKIRI_SWORD
} from "../types";

//Deku Sticks Actions
export const addDekuSticks = (e) => {
    console.log("added deku sticks");
    return {
        type: ADD_DEKU_STICKS
    };
};

export const removeDekuSticks = (e) => {
    e.preventDefault();
    console.log("removed deku sticks");
    return {
        type: REMOVE_DEKU_STICKS    
    };
};

//Deku Nuts Actions
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

//Bomb Bag Actions
export const addBombs = (e) => {
    console.log("added bombs");
    return {
        type: ADD_BOMBS
    };
};

export const removeBombs = (e) => {
    e.preventDefault();
    console.log("removed bombs");
    return {
        type: REMOVE_BOMBS    
    };
};

//Fairy Bow Actions
export const addFairyBow = (e) => {
    console.log("added fairy bow");
    return {
        type: ADD_FAIRY_BOW
    };
};

export const removeFairyBow = (e) => {
    e.preventDefault();
    console.log("removed fairy bow");
    return {
        type: REMOVE_FAIRY_BOW    
    };
};

//Fire Arrows Actions
export const addFireArrows = (e) => {
    console.log("added fire arrows");
    return {
        type: ADD_FIRE_ARROWS
    };
};

export const removeFireArrows = (e) => {
    e.preventDefault();
    console.log("removed fired arrows");
    return {
        type: REMOVE_FIRE_ARROWS    
    };
};

//Din's Fire Actions
export const addDinsFire = (e) => {
    console.log("added din's fire");
    return {
        type: ADD_DINS_FIRE
    };
};

export const removeDinsFire = (e) => {
    e.preventDefault();
    console.log("removed din's fire");
    return {
        type: REMOVE_DINS_FIRE    
    };
};

//Kokiri Sword Actions
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