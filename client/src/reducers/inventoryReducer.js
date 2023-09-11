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
            let newInventory = [...state.currentInventory, addedItem.name];
            return {
                ...state,
                currentInventory: newInventory
            };
        case REMOVE_ITEM:
            // let itemToRemove = state.currentInventory.find(item => action.id === item.id);
            let reducedInventory = state.currentInventory.filter((item) => {
                console.log(item[0].name);
                return action.name !== item.name;
            });
            console.log(reducedInventory);
            return {
                ...state,
                currentInventory: reducedInventory
            };
        default:
            return state;
    }
};