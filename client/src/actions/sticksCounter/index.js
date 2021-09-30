import { ADD_DEKU_STICKS, REMOVE_DEKU_STICKS } from "../types";

export const addDekuSticks = () => {
    return {
        type: ADD_DEKU_STICKS
    };
};

export const removeDekuSticks = () => {
    return {
        type: REMOVE_DEKU_STICKS
    };
};