import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WeirdEggIcon from "../../../assets/images/fourth-row/Weird-Egg.png";

const PastTradeSequence = (props) => {

    const { weirdEgg, addWeirdEgg, removeWeirdEgg } = props.weirdEggLogic;
    const { cucco, addCucco, removeCucco } = props.cuccoLogic;
    const { zeldasLetter, addZeldasLetter, removeZeldasLetter } = props.zeldasLetterLogic;
    const { keatonMask, addKeatonMask, removeKeatonMask } = props.keatonMaskLogic;
    const { skullMask, addSkullMask, removeSkullMask } = props.skullMaskLogic;
    const { spookyMask, addSpookyMask, removeSpookyMask } = props.spookyMaskLogic;
    const { bunnyHood, addBunnyHood, removeBunnyHood } = props.bunnyHoodLogic;
    const { maskOfTruth, addMaskOfTruth, removeMaskOfTruth } = props.maskOfTruthLogic;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addWeirdEgg}
                onContextMenu={removeWeirdEgg}
                style={(weirdEgg === false || weirdEgg === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={WeirdEggIcon} 
            />
        </Grid.Column>
    );
}

export default PastTradeSequence;