import { ADD_SKULLTULA, REMOVE_SKULLTULA } from "../types";

export const addSkulltula = () => {
    return {
        type: ADD_SKULLTULA
    };
};

export const removeSkulltula = () => {
    return {
        type: REMOVE_SKULLTULA
    };
};