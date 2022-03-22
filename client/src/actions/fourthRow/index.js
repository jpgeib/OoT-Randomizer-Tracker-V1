import { 
    ADD_GORON_TUNIC, REMOVE_GORON_TUNIC,
    ADD_ZORA_TUNIC, REMOVE_ZORA_TUNIC,
    ADD_WALLET, REMOVE_WALLET,
    ADD_SKULLTULA, REMOVE_SKULLTULA,
    ADD_BOTTLE, REMOVE_BOTTLE,
    ADD_RUTOS_LETTER, REMOVE_RUTOS_LETTER,
    ADD_WEIRD_EGG, REMOVE_WEIRD_EGG,
    ADD_CUCCO, REMOVE_CUCCO,
    ADD_ZELDAS_LETTER, REMOVE_ZELDAS_LETTER,
    ADD_KEATON_MASK, REMOVE_KEATON_MASK,
    ADD_SKULL_MASK, REMOVE_SKULL_MASK,
    ADD_SPOOKY_MASK, REMOVE_SPOOKY_MASK,
    ADD_BUNNY_HOOD, REMOVE_BUNNY_HOOD,
    ADD_MASK_OF_TRUTH, REMOVE_MASK_OF_TRUTH
} from "../types";

//Goron Tunic Actions
export const addGoronTunic = (e) => {
    console.log("added goron tunic");
    return {
        type: ADD_GORON_TUNIC
    };
};

export const removeGoronTunic = (e) => {
    e.preventDefault();
    console.log("removed goron tunic");
    return {
        type: REMOVE_GORON_TUNIC    
    };
};

//Zora Tunic Actions
export const addZoraTunic = (e) => {
    console.log("added zora tunic");
    return {
        type: ADD_ZORA_TUNIC
    };
};

export const removeZoraTunic = (e) => {
    e.preventDefault();
    console.log("removed zora tunic");
    return {
        type: REMOVE_ZORA_TUNIC    
    };
};

//Wallet Actions
export const addWallet = (e) => {
    console.log("added wallet");
    return {
        type: ADD_WALLET
    };
};

export const removeWallet = (e) => {
    e.preventDefault();
    console.log("removed wallet");
    return {
        type: REMOVE_WALLET    
    };
};

//Skulltula Token Actions
export const addSkulltula = (e) => {
    console.log("added skulltula token");
    return {
        type: ADD_SKULLTULA
    };
};

export const removeSkulltula = (e) => {
    e.preventDefault();
    console.log("removed skulltula token");
    return {
        type: REMOVE_SKULLTULA
    };
};

//Empty Bottles Actions
export const addEmptyBottle = (e) => {
    console.log("added empty bottle");
    return {
        type: ADD_BOTTLE
    };
};

export const removeEmptyBottle = (e) => {
    e.preventDefault();
    console.log("removed empty bottle");
    return {
        type: REMOVE_BOTTLE    
    };
};

//Ruto's Letter Actions
export const addRutosLetter = (e) => {
    console.log("added ruto's letter");
    return {
        type: ADD_RUTOS_LETTER
    };
};

export const removeRutosLetter = (e) => {
    e.preventDefault();
    console.log("removed ruto's letter");
    return {
        type: REMOVE_RUTOS_LETTER    
    };
};

//Past Trading Sequence Actions
export const addWeirdEgg = (e) => {
    console.log("added weird egg");
    return {
        type: ADD_WEIRD_EGG
    };
};

export const removeWeirdEgg = (e) => {
    e.preventDefault();
    console.log("removed weird egg");
    return {
        type: REMOVE_WEIRD_EGG    
    };
};

export const addCucco = (e) => {
    console.log("added cucco");
    return {
        type: ADD_CUCCO
    };
};

export const removeCucco = (e) => {
    e.preventDefault();
    console.log("removed cucco");
    return {
        type: REMOVE_CUCCO    
    };
};

export const addZeldasLetter = (e) => {
    console.log("added zelda's letter");
    return {
        type: ADD_ZELDAS_LETTER
    };
};

export const removeZeldasLetter = (e) => {
    e.preventDefault();
    console.log("removed zelda's letter");
    return {
        type: REMOVE_ZELDAS_LETTER    
    };
};

export const addKeatonMask = (e) => {
    console.log("added keaton mask");
    return {
        type: ADD_KEATON_MASK
    };
};

export const removeKeatonMask = (e) => {
    e.preventDefault();
    console.log("removed keaton mask");
    return {
        type: REMOVE_KEATON_MASK    
    };
};

export const addSkullMask = (e) => {
    console.log("added skull mask");
    return {
        type: ADD_SKULL_MASK
    };
};

export const removeSkullMask = (e) => {
    e.preventDefault();
    console.log("removed skull mask");
    return {
        type: REMOVE_SKULL_MASK    
    };
};

export const addSpookyMask = (e) => {
    console.log("added spooky mask");
    return {
        type: ADD_SPOOKY_MASK
    };
};

export const removeSpookyMask = (e) => {
    e.preventDefault();
    console.log("removed spooky mask");
    return {
        type: REMOVE_SPOOKY_MASK    
    };
};

export const addBunnyHood = (e) => {
    console.log("added bunny hood");
    return {
        type: ADD_BUNNY_HOOD
    };
};

export const removeBunnyHood = (e) => {
    e.preventDefault();
    console.log("removed bunny hood");
    return {
        type: REMOVE_BUNNY_HOOD    
    };
};

export const addMaskOfTruth = (e) => {
    console.log("added mask of truth");
    return {
        type: ADD_MASK_OF_TRUTH
    };
};

export const removeMaskOfTruth = (e) => {
    e.preventDefault();
    console.log("removed mask of truth");
    return {
        type: REMOVE_MASK_OF_TRUTH    
    };
};