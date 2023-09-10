import { ADD_ITEM, REMOVE_ITEM } from "../types";

export const addItem = (id, name) => {
    console.log(`Added ${name}`);
    return {
        type: ADD_ITEM,
        id,
        name
    };
};

export const removeItem = (id, name, e) => {
    e.preventDefault();
    console.log(`Removed ${name}`);
    return {
        type: REMOVE_ITEM,
        id,
        name
    };
};