import { ADD_ITEM, REMOVE_ITEM } from "../actions/types";
import { items } from "../items";

let INITIAL_STATE = {
    currentInventory: [],
    itemPool: items
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_ITEM:
            let addedItem = state.itemPool.find(item => item.id === action.id);
            let newInventory = [...state.currentInventory, addedItem.name]
            return {
                currentInventory: newInventory
            };
        case REMOVE_ITEM:
            let itemToRemove = state.currentInventory.find(item => action.id === item.id);
            let reducedInventory = [...state.currentInventory, state.currentInventory.filter(item => itemToRemove.name === item.name)];
            return {
                currentInventory: reducedInventory
            };
        default:
            return state;
    }
};