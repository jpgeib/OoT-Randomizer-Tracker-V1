import { ADD_ITEM, REMOVE_ITEM } from "../types";

export const addItem = (id, name) => {
    console.log(`Added ${name} with ${id}`);
    return {
        type: ADD_ITEM,
        id: id,
        name: name
    };
};

export const removeItem = (e, id, name) => {
    console.log(`Removed ${name} with ${id}`);
    e.preventDefault();
    return {
        type: REMOVE_ITEM,
        id: id,
        name: name
    };
};