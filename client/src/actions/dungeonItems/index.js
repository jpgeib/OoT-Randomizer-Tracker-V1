import {
    ADD_LIGHT_MEDALLION, REMOVE_LIGHT_MEDALLION,
    ADD_KOKIRI_EMERALD, REMOVE_KOKIRI_EMERALD,
    ADD_GORON_RUBY, REMOVE_GORON_RUBY,
    ADD_ZORA_SAPPHIRE, REMOVE_ZORA_SAPPHIRE,
    ADD_FOREST_SMALL_KEY, REMOVE_FOREST_SMALL_KEY,
    ADD_FOREST_BOSS_KEY, REMOVE_FOREST_BOSS_KEY,
    ADD_FOREST_MEDALLION, REMOVE_FOREST_MEDALLION,
    ADD_FIRE_SMALL_KEY, REMOVE_FIRE_SMALL_KEY,
    ADD_FIRE_BOSS_KEY, REMOVE_FIRE_BOSS_KEY,
    ADD_FIRE_MEDALLION, REMOVE_FIRE_MEDALLION,
    ADD_WATER_SMALL_KEY, REMOVE_WATER_SMALL_KEY,
    ADD_WATER_BOSS_KEY, REMOVE_WATER_BOSS_KEY,
    ADD_WATER_MEDALLION, REMOVE_WATER_MEDALLION,
    ADD_SHADOW_SMALL_KEY, REMOVE_SHADOW_SMALL_KEY,
    ADD_SHADOW_BOSS_KEY, REMOVE_SHADOW_BOSS_KEY,
    ADD_SHADOW_MEDALLION, REMOVE_SHADOW_MEDALLION,
    ADD_SPIRIT_SMALL_KEY, REMOVE_SPIRIT_SMALL_KEY,
    ADD_SPIRIT_BOSS_KEY, REMOVE_SPIRIT_BOSS_KEY,
    ADD_SPIRIT_MEDALLION, REMOVE_SPIRIT_MEDALLION,
    ADD_WELL_SMALL_KEY, REMOVE_WELL_SMALL_KEY,
    ADD_FORTRESS_SMALL_KEY, REMOVE_FORTRESS_SMALL_KEY,
    ADD_TRAINING_SMALL_KEY, REMOVE_TRAINING_SMALL_KEY,
    ADD_GANON_SMALL_KEY, REMOVE_GANON_SMALL_KEY,
    ADD_GANON_BOSS_KEY, REMOVE_GANON_BOSS_KEY
} from "../types";

//Default Actions
export const addLightMedallion = (e) => {
    console.log("added light medallion");
    return {
        type: ADD_LIGHT_MEDALLION
    };
};

export const removeLightMedallion = (e) => {
    e.preventDefault();
    console.log("removed light medallion");
    return {
        type: REMOVE_LIGHT_MEDALLION    
    };
};

//Great Deku Tree Actions
export const addKokiriEmerald = (e) => {
    console.log("added kokiri emerald");
    return {
        type: ADD_KOKIRI_EMERALD
    };
};

export const removeKokiriEmerald = (e) => {
    e.preventDefault();
    console.log("removed kokiri emerald");
    return {
        type: REMOVE_KOKIRI_EMERALD    
    };
};

//Dodongo's Cavern Actions
export const addGoronRuby = (e) => {
    console.log("added goron ruby");
    return {
        type: ADD_GORON_RUBY
    };
};

export const removeGoronRuby = (e) => {
    e.preventDefault();
    console.log("removed goron ruby");
    return {
        type: REMOVE_GORON_RUBY    
    };
};

//Lord Jabu Jabu's Belly Actions
export const addZoraSapphire = (e) => {
    console.log("added zora sapphire");
    return {
        type: ADD_ZORA_SAPPHIRE
    };
};

export const removeZoraSapphire = (e) => {
    e.preventDefault();
    console.log("removed zora sapphire");
    return {
        type: REMOVE_ZORA_SAPPHIRE    
    };
};

//Forest Temple Actions
export const addForestKey = (e) => {
    console.log("added forest temple small key");
    return {
        type: ADD_FOREST_SMALL_KEY
    };
};

export const removeForestKey = (e) => {
    e.preventDefault();
    console.log("removed forest temple small key");
    return {
        type: REMOVE_FOREST_SMALL_KEY    
    };
};

export const addForestBossKey = (e) => {
    console.log("added forest temple boss key");
    return {
        type: ADD_FOREST_BOSS_KEY
    };
};

export const removeForestBossKey = (e) => {
    e.preventDefault();
    console.log("removed forest temple boss key");
    return {
        type: REMOVE_FOREST_BOSS_KEY    
    };
};

export const addForestMedallion = (e) => {
    console.log("added forest medallion");
    return {
        type: ADD_FOREST_MEDALLION
    };
};

export const removeForestMedallion = (e) => {
    e.preventDefault();
    console.log("removed forest medallion");
    return {
        type: REMOVE_FOREST_MEDALLION    
    };
};

//Fire Temple Actions
export const addFireKey = (e) => {
    console.log("added fire temple small key");
    return {
        type: ADD_FIRE_SMALL_KEY
    };
};

export const removeFireKey = (e) => {
    e.preventDefault();
    console.log("removed fire temple small key");
    return {
        type: REMOVE_FIRE_SMALL_KEY    
    };
};

export const addFireBossKey = (e) => {
    console.log("added fire temple boss key");
    return {
        type: ADD_FIRE_BOSS_KEY
    };
};

export const removeFireBossKey = (e) => {
    e.preventDefault();
    console.log("removed fire temple boss key");
    return {
        type: REMOVE_FIRE_BOSS_KEY    
    };
};

export const addFireMedallion = (e) => {
    console.log("added fire medallion");
    return {
        type: ADD_FIRE_MEDALLION
    };
};

export const removeFireMedallion = (e) => {
    e.preventDefault();
    console.log("removed fire medallion");
    return {
        type: REMOVE_FIRE_MEDALLION    
    };
};

//Water Temple Actions
export const addWaterKey = (e) => {
    console.log("added water temple small key");
    return {
        type: ADD_WATER_SMALL_KEY
    };
};

export const removeWaterKey = (e) => {
    e.preventDefault();
    console.log("removed water temple small key");
    return {
        type: REMOVE_WATER_SMALL_KEY    
    };
};

export const addWaterBossKey = (e) => {
    console.log("added water temple boss key");
    return {
        type: ADD_WATER_BOSS_KEY
    };
};

export const removeWaterBossKey = (e) => {
    e.preventDefault();
    console.log("removed water temple boss key");
    return {
        type: REMOVE_WATER_BOSS_KEY    
    };
};

export const addWaterMedallion = (e) => {
    console.log("added water medallion");
    return {
        type: ADD_WATER_MEDALLION
    };
};

export const removeWaterMedallion = (e) => {
    e.preventDefault();
    console.log("removed water medallion");
    return {
        type: REMOVE_WATER_MEDALLION    
    };
};

//Shadow Temple Actions
export const addShadowKey = (e) => {
    console.log("added shadow temple small key");
    return {
        type: ADD_SHADOW_SMALL_KEY
    };
};

export const removeShadowKey = (e) => {
    e.preventDefault();
    console.log("removed shadow temple small key");
    return {
        type: REMOVE_SHADOW_SMALL_KEY    
    };
};

export const addShadowBossKey = (e) => {
    console.log("added shadow temple boss key");
    return {
        type: ADD_SHADOW_BOSS_KEY
    };
};

export const removeShadowBossKey = (e) => {
    e.preventDefault();
    console.log("removed shadow temple boss key");
    return {
        type: REMOVE_SHADOW_BOSS_KEY    
    };
};

export const addShadowMedallion = (e) => {
    console.log("added shadow medallion");
    return {
        type: ADD_SHADOW_MEDALLION
    };
};

export const removeShadowMedallion = (e) => {
    e.preventDefault();
    console.log("removed shadow medallion");
    return {
        type: REMOVE_SHADOW_MEDALLION    
    };
};

//Spirit Temple Actions
export const addSpiritKey = (e) => {
    console.log("added spirit temple small key");
    return {
        type: ADD_SPIRIT_SMALL_KEY
    };
};

export const removeSpiritKey = (e) => {
    e.preventDefault();
    console.log("removed spirit temple small key");
    return {
        type: REMOVE_SPIRIT_SMALL_KEY    
    };
};

export const addSpiritBossKey = (e) => {
    console.log("added spirit temple boss key");
    return {
        type: ADD_SPIRIT_BOSS_KEY
    };
};

export const removeSpiritBossKey = (e) => {
    e.preventDefault();
    console.log("removed spirit temple boss key");
    return {
        type: REMOVE_SPIRIT_BOSS_KEY    
    };
};

export const addSpiritMedallion = (e) => {
    console.log("added spirit medallion");
    return {
        type: ADD_SPIRIT_MEDALLION
    };
};

export const removeSpiritMedallion = (e) => {
    e.preventDefault();
    console.log("removed spirit medallion");
    return {
        type: REMOVE_SPIRIT_MEDALLION    
    };
};

//Bottom of the Well Actions
export const addWellKey = (e) => {
    console.log("added well small key");
    return {
        type: ADD_WELL_SMALL_KEY
    };
};

export const removeWellKey = (e) => {
    e.preventDefault();
    console.log("removed well small key");
    return {
        type: REMOVE_WELL_SMALL_KEY    
    };
};

//Gerudo Fortress Actions
export const addFortressKey = (e) => {
    console.log("added fortress small key");
    return {
        type: ADD_FORTRESS_SMALL_KEY
    };
};

export const removeFortressKey = (e) => {
    e.preventDefault();
    console.log("removed fortress small key");
    return {
        type: REMOVE_FORTRESS_SMALL_KEY    
    };
};

//Gerudo Training Grounds Actions
export const addTrainingKey = (e) => {
    console.log("added training small key");
    return {
        type: ADD_TRAINING_SMALL_KEY
    };
};

export const removeTrainingKey = (e) => {
    e.preventDefault();
    console.log("removed training small key");
    return {
        type: REMOVE_TRAINING_SMALL_KEY    
    };
};

//Ganon's Castle Actions
export const addGanonKey = (e) => {
    console.log("added ganon's castle small key");
    return {
        type: ADD_GANON_SMALL_KEY
    };
};

export const removeGanonKey = (e) => {
    e.preventDefault();
    console.log("removed ganon's castle small key");
    return {
        type: REMOVE_GANON_SMALL_KEY    
    };
};

export const addGanonBossKey = (e) => {
    console.log("added ganon's castle boss key");
    return {
        type: ADD_GANON_BOSS_KEY
    };
};

export const removeGanonBossKey = (e) => {
    e.preventDefault();
    console.log("removed ganon's castle boss key");
    return {
        type: REMOVE_GANON_BOSS_KEY    
    };
};