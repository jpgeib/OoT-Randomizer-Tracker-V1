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
} from "../actions/types";

let INITIAL_STATE = {
    ironBoots: null,
    hoverBoots: null,
    silverScale: null,
    goldenSCale: null,
    magic: null,
    doubleMagic: null,
    goronsBracelet: null,
    silverGauntlets: null,
    goldenGauntlets: null,
    gerudoCard: null,
    pocketEgg: null,
    pocketCucco: null,
    cojiro: null,
    oddMushroom: null,
    oddPotion: null,
    poachersSaw: null,
    brokenGoronsSword: null,
    prescription: null,
    eyeballFrog: null,
    eyeDrops: null,
    claimCheck: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_IRON_BOOTS:
            return { ...state, ironBoots: true };
        case REMOVE_IRON_BOOTS:
            return { ...state, ironBoots: false };
        case ADD_HOVER_BOOTS:
            return { ...state, hoverBoots: true };
        case REMOVE_HOVER_BOOTS:
            return { ...state, hoverBoots: false };
        case ADD_SILVER_SCALE:
            return { ...state, silverScale: true };
        case REMOVE_SILVER_SCALE:
            return { ...state, silverScale: false };
        case ADD_GOLDEN_SCALE:
            return { ...state, goldenScale: true };
        case REMOVE_GOLDEN_SCALE:
            return { ...state, goldenScale: false };
        case ADD_MAGIC:
            return { ...state, magic: true };
        case REMOVE_MAGIC:
            return { ...state, magic: false };
        case ADD_DOUBLE_MAGIC:
            return { ...state, doubleMagic: true };
        case REMOVE_DOUBLE_MAGIC:
            return { ...state, doubleMagic: false };
        case ADD_GORONS_BRACELET:
            return { ...state, goronsBracelet: true };
        case REMOVE_GORONS_BRACELET:
            return { ...state, goronsBracelet: false };
        case ADD_SILVER_GAUNTLETS:
            return { ...state, silverGauntlets: true };
        case REMOVE_SILVER_GAUNTLETS:
            return { ...state, silverGauntlets: false };
        case ADD_GOLDEN_GAUNTLETS:
            return { ...state, goldenGauntlets: true };
        case REMOVE_GOLDEN_GAUNTLETS:
            return { ...state, goldenGauntlets: false };
        case ADD_GERUDO_CARD:
            return { ...state, gerudoCard: true };
        case REMOVE_GERUDO_CARD:
            return { ...state, gerudoCard: false };
        case ADD_POCKET_EGG:
            return { ...state, pocketEgg: true };
        case REMOVE_POCKET_EGG:
            return { ...state, pocketEgg: false };
        case ADD_POCKET_CUCCO:
            return { ...state, pocketCucco: true };
        case REMOVE_POCKET_CUCCO:
            return { ...state, pocketCucco: false };
        case ADD_COJIRO:
            return { ...state, cojiro: true };
        case REMOVE_COJIRO:
            return { ...state, cojiro: false };
        case ADD_ODD_MUSHROOM:
            return { ...state, oddMushroom: true };
        case REMOVE_ODD_MUSHROOM:
            return { ...state, oddMushroom: false };
        case ADD_ODD_POTION:
            return { ...state, oddPotion: true };
        case REMOVE_ODD_POTION:
            return { ...state, oddPotion: false };
        case ADD_POACHERS_SAW:
            return { ...state, poachersSaw: true };
        case REMOVE_POACHERS_SAW:
            return { ...state, poachersSaw: false };
        case ADD_BROKEN_GORONS_SWORD:
            return { ...state, brokenGoronsSword: true };
        case REMOVE_BROKEN_GORONS_SWORD:
            return { ...state, brokenGoronsSword: false };
        case ADD_PRESCRIPTION:
            return { ...state, prescription: true };
        case REMOVE_PRESCRIPTION:
            return { ...state, prescription: false };
        case ADD_EYEBALL_FROG:
            return { ...state, eyeballFrog: true };
        case REMOVE_EYEBALL_FROG:
            return { ...state, eyeballFrog: false };
        case ADD_EYE_DROPS:
            return { ...state, eyeDrops: true };
        case REMOVE_EYE_DROPS:
            return { ...state, eyeDrops: false };
        case ADD_CLAIM_CHECK:
            return { ...state, claimCheck: true };
        case REMOVE_CLAIM_CHECK:
            return { ...state, claimCheck: false };
        default:
            return state;
    }
};