import {
    ADD_DEKU_STICKS,
    REMOVE_DEKU_STICKS,
    ADD_FIRST_STICKS_UPGRADE,
    REMOVE_FIRST_STICKS_UPGRADE,
    ADD_SECOND_STICKS_UPGRADE,
    REMOVE_SECOND_STICKS_UPGRADE
} from "../types";

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

export const addFirstSticksUpgrade = () => {
    return {
        type: ADD_FIRST_STICKS_UPGRADE
    };
};

export const removeFirstSticksUpgrade = () => {
    return {
        type: REMOVE_FIRST_STICKS_UPGRADE
    };
};

export const addSecondSticksUpgrade = () => {
    return {
        type: ADD_SECOND_STICKS_UPGRADE
    };
};

export const removeSecondSticksUpgrade = () => {
    return {
        type: REMOVE_SECOND_STICKS_UPGRADE
    };
};