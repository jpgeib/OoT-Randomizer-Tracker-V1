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
} from "../actions/types";

let INITIAL_STATE = {
    goronTunic: null,
    zoraTunic: null,
    wallet: 99,
    skulltulas: 0,
    emptyBottles: 0,
    rutosLetter: null,
    weirdEgg: null,
    cucco: null,
    zeldasLetter: null,
    keatonMask: null,
    skullMask: null,
    spookyMask: null,
    bunnyHood: null,
    maskOfTruth: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_GORON_TUNIC:
            return { ...state, goronTunic: true };
        case REMOVE_GORON_TUNIC:
            return { ...state, goronTunic: false };
        case ADD_ZORA_TUNIC:
            return { ...state, zoraTunic: true };
        case REMOVE_ZORA_TUNIC:
            return { ...state, zoraTunic: false };
        case ADD_WALLET:
            return { ...state };
        case REMOVE_WALLET:
            return { ...state };
        case ADD_SKULLTULA:
            return { ...state, skulltulas: Math.min(100, state.skulltulas + 1) };
        case REMOVE_SKULLTULA:
            return { ...state, skulltulas: Math.max(0, state.skulltulas - 1) };
        case ADD_BOTTLE:
            return { ...state, emptyBottles: Math.min(4, state.emptyBottles + 1) };
        case REMOVE_BOTTLE:
            return { ...state, emptyBottles: Math.max(0, state.emptyBottles - 1) };
        case ADD_RUTOS_LETTER:
            return { ...state, rutosLetter: true };
        case REMOVE_RUTOS_LETTER:
            return { ...state, rutosLetter: false };
        case ADD_WEIRD_EGG:
            return { ...state, weirdEgg: true };
        case REMOVE_WEIRD_EGG:
            return { ...state, weirdEgg: false };
        case ADD_CUCCO:
            return { ...state, cucco: true };
        case REMOVE_CUCCO:
            return { ...state, cucco: false };
        case ADD_ZELDAS_LETTER:
            return { ...state, zeldasLetter: true };
        case REMOVE_ZELDAS_LETTER:
            return { ...state, zeldasLetter: false };
        case ADD_KEATON_MASK:
            return { ...state, keatonMask: true };
        case REMOVE_KEATON_MASK:
            return { ...state, keatonMask: false };
        case ADD_SKULL_MASK:
            return { ...state, skullMask: true };
        case REMOVE_SKULL_MASK:
            return { ...state, skullMask: false };
        case ADD_SPOOKY_MASK:
            return { ...state, spookyMask: true };
        case REMOVE_SPOOKY_MASK:
            return { ...state, spookyMask: false };
        case ADD_BUNNY_HOOD:
            return { ...state, bunnyHood: true };
        case REMOVE_BUNNY_HOOD:
            return { ...state, bunnyHood: false };
        case ADD_MASK_OF_TRUTH:
            return { ...state, maskOfTruth: true };
        case REMOVE_MASK_OF_TRUTH:
            return { ...state, maskOfTruth: false };
        default:
            return state;
    }
};