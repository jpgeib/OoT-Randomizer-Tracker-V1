import {
    ADD_IRON_BOOTS, REMOVE_IRON_BOOTS,
    ADD_HOVER_BOOTS, REMOVE_HOVER_BOOTS,
    ADD_SILVER_SCALE, REMOVE_SILVER_SCALE,
    ADD_GOLDEN_SCALE, REMOVE_GOLDEN_SCALE,
    ADD_MAGIC, REMOVE_MAGIC,
    ADD_DOUBLE_MAGIC, REMOVE_DOUBLE_MAGIC,
    ADD_GORONS_BRACELET, REMOVE_GORONS_BRACELET,
    ADD_SILVER_GAUNTLETS, REMOVE_SILVER_GAUNTLETS,
    ADD_GOLDEN_GAUNTLETS, REMOVE_GOLDEN_GAUNTLETS,
    ADD_GERUDO_CARD, REMOVE_GERUDO_CARD,
    ADD_POCKET_EGG, REMOVE_POCKET_EGG,
    ADD_POCKET_CUCCO, REMOVE_POCKET_CUCCO,
    ADD_COJIRO, REMOVE_COJIRO,
    ADD_ODD_MUSHROOM, REMOVE_ODD_MUSHROOM,
    ADD_ODD_POTION, REMOVE_ODD_POTION,
    ADD_POACHERS_SAW, REMOVE_POACHERS_SAW,
    ADD_BROKEN_GORONS_SWORD, REMOVE_BROKEN_GORONS_SWORD,
    ADD_PRESCRIPTION, REMOVE_PRESCRIPTION,
    ADD_EYEBALL_FROG, REMOVE_EYEBALL_FROG,
    ADD_EYE_DROPS, REMOVE_EYE_DROPS,
    ADD_CLAIM_CHECK, REMOVE_CLAIM_CHECK
} from "../types";

//Iron Boots Actions
export const addIronBoots = (e) => {
    console.log("added iron boots");
    return {
        type: ADD_IRON_BOOTS
    };
};

export const removeIronBoots = (e) => {
    e.preventDefault();
    console.log("removed iron boots");
    return {
        type: REMOVE_IRON_BOOTS    
    };
};

//Hover Boots Actions
export const addHoverBoots = (e) => {
    console.log("added hover boots");
    return {
        type: ADD_HOVER_BOOTS
    };
};

export const removeHoverBoots = (e) => {
    e.preventDefault();
    console.log("removed hover boots");
    return {
        type: REMOVE_HOVER_BOOTS    
    };
};

//Zora Scale Actions
export const addSilverScale = (e) => {
    console.log("added silver scale");
    return {
        type: ADD_SILVER_SCALE
    };
};

export const removeSilverScale = (e) => {
    e.preventDefault();
    console.log("removed silver scale");
    return {
        type: REMOVE_SILVER_SCALE    
    };
};

export const addGoldenScale = (e) => {
    console.log("added golden scale");
    return {
        type: ADD_GOLDEN_SCALE
    };
};

export const removeGoldenScale = (e) => {
    e.preventDefault();
    console.log("removed golden scale");
    return {
        type: REMOVE_GOLDEN_SCALE    
    };
};

//Magic Meter Actions
export const addMagic = (e) => {
    console.log("added magic");
    return {
        type: ADD_MAGIC
    };
};

export const removeMagic = (e) => {
    e.preventDefault();
    console.log("removed magic");
    return {
        type: REMOVE_MAGIC    
    };
};

export const addDoubleMagic = (e) => {
    console.log("added double magic");
    return {
        type: ADD_DOUBLE_MAGIC
    };
};

export const removeDoubleMagic = (e) => {
    e.preventDefault();
    console.log("removed double magic");
    return {
        type: REMOVE_DOUBLE_MAGIC    
    };
};

//Strength Enhancer Actions
export const addGoronsBracelet = (e) => {
    console.log("added goron's bracelet");
    return {
        type: ADD_GORONS_BRACELET
    };
};

export const removeGoronsBracelet = (e) => {
    e.preventDefault();
    console.log("removed goron's bracelet");
    return {
        type: REMOVE_GORONS_BRACELET    
    };
};

export const addSilverGauntlets = (e) => {
    console.log("added silver gauntlets");
    return {
        type: ADD_SILVER_GAUNTLETS
    };
};

export const removeSilverGauntlets = (e) => {
    e.preventDefault();
    console.log("removed silver gauntlets");
    return {
        type: REMOVE_SILVER_GAUNTLETS    
    };
};

export const addGoldenGauntlets = (e) => {
    console.log("added golden gauntlets");
    return {
        type: ADD_GOLDEN_GAUNTLETS
    };
};

export const removeGoldenGauntlets = (e) => {
    e.preventDefault();
    console.log("removed golden gauntlets");
    return {
        type: REMOVE_GOLDEN_GAUNTLETS    
    };
};

//Gerudo Membership Card Actions
export const addGerudoCard = (e) => {
    console.log("added gerudo card");
    return {
        type: ADD_GERUDO_CARD
    };
};

export const removeGerudoCard = (e) => {
    e.preventDefault();
    console.log("removed gerudo card");
    return {
        type: REMOVE_GERUDO_CARD    
    };
};

//Future Trading Sequence Actions
export const addPocketEgg = (e) => {
    console.log("added pocket egg");
    return {
        type: ADD_POCKET_EGG
    };
};

export const removePocketEgg = (e) => {
    e.preventDefault();
    console.log("removed pocket egg");
    return {
        type: REMOVE_POCKET_EGG    
    };
};

export const addPocketCucco = (e) => {
    console.log("added pocket cucco");
    return {
        type: ADD_POCKET_CUCCO
    };
};

export const removePocketCucco = (e) => {
    e.preventDefault();
    console.log("removed pocket cucco");
    return {
        type: REMOVE_POCKET_CUCCO    
    };
};

export const addCojiro = (e) => {
    console.log("added cojiro");
    return {
        type: ADD_COJIRO
    };
};

export const removeCojiro = (e) => {
    e.preventDefault();
    console.log("removed cojiro");
    return {
        type: REMOVE_COJIRO    
    };
};

export const addOddMushroom = (e) => {
    console.log("added odd mushroom");
    return {
        type: ADD_ODD_MUSHROOM
    };
};

export const removeOddMushroom = (e) => {
    e.preventDefault();
    console.log("removed odd mushroom");
    return {
        type: REMOVE_ODD_MUSHROOM    
    };
};

export const addOddPotion = (e) => {
    console.log("added odd potion");
    return {
        type: ADD_ODD_POTION
    };
};

export const removeOddPotion = (e) => {
    e.preventDefault();
    console.log("removed odd potion");
    return {
        type: REMOVE_ODD_POTION    
    };
};

export const addPoachersSaw = (e) => {
    console.log("added poacher's saw");
    return {
        type: ADD_POACHERS_SAW
    };
};

export const removePoachersSaw = (e) => {
    e.preventDefault();
    console.log("removed poacher's saw");
    return {
        type: REMOVE_POACHERS_SAW    
    };
};

export const addBrokenGoronsSword = (e) => {
    console.log("added broken goron's sword");
    return {
        type: ADD_BROKEN_GORONS_SWORD
    };
};

export const removeBrokenGoronsSword = (e) => {
    e.preventDefault();
    console.log("removed broken goron's sword");
    return {
        type: REMOVE_BROKEN_GORONS_SWORD    
    };
};

export const addPrescription = (e) => {
    console.log("added prescription");
    return {
        type: ADD_PRESCRIPTION
    };
};

export const removePrescription = (e) => {
    e.preventDefault();
    console.log("removed prescription");
    return {
        type: REMOVE_PRESCRIPTION    
    };
};

export const addEyeballFrog = (e) => {
    console.log("added eyeball frog");
    return {
        type: ADD_EYEBALL_FROG
    };
};

export const removeEyeballFrog = (e) => {
    e.preventDefault();
    console.log("removed eyeball frog");
    return {
        type: REMOVE_EYEBALL_FROG    
    };
};

export const addEyeDrops = (e) => {
    console.log("added eye drops");
    return {
        type: ADD_EYE_DROPS
    };
};

export const removeEyeDrops = (e) => {
    e.preventDefault();
    console.log("removed eye drops");
    return {
        type: REMOVE_EYE_DROPS    
    };
};

export const addClaimCheck = (e) => {
    console.log("added claim check");
    return {
        type: ADD_CLAIM_CHECK
    };
};

export const removeClaimCheck = (e) => {
    e.preventDefault();
    console.log("removed claim check");
    return {
        type: REMOVE_CLAIM_CHECK    
    };
};