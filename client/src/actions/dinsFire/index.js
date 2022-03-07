import { ADD_DINS_FIRE, REMOVE_DINS_FIRE } from "../types";

export const addDinsFire = (e) => {
    console.log("added din's fire");
    return {
        type: ADD_DINS_FIRE
    };
};

export const removeDinsFire = (e) => {
    e.preventDefault();
    console.log("removed din's fire");
    return {
        type: REMOVE_DINS_FIRE    
    };
};