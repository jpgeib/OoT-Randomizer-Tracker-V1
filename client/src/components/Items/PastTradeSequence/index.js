import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WeirdEggIcon from "../../../assets/images/fourth-row/Weird-Egg.png";
import CuccoIcon from "../../../assets/images/fourth-row/Cucco-3D.png";
import ZeldasLetterIcon from "../../../assets/images/fourth-row/Zeldas-Letter.png";

const PastTradeSequence = (props) => {

    const { weirdEgg, addWeirdEgg, removeWeirdEgg } = props.weirdEggLogic;
    const { cucco, addCucco, removeCucco } = props.cuccoLogic;
    const { zeldasLetter, addZeldasLetter, removeZeldasLetter } = props.zeldasLetterLogic;
    const { keatonMask, addKeatonMask, removeKeatonMask } = props.keatonMaskLogic;
    const { skullMask, addSkullMask, removeSkullMask } = props.skullMaskLogic;
    const { spookyMask, addSpookyMask, removeSpookyMask } = props.spookyMaskLogic;
    const { bunnyHood, addBunnyHood, removeBunnyHood } = props.bunnyHoodLogic;
    const { maskOfTruth, addMaskOfTruth, removeMaskOfTruth } = props.maskOfTruthLogic;

    const conditionals = {
        none: (weirdEgg === false || weirdEgg === null),
        weirdEgg: (
            weirdEgg === true && (cucco === false || cucco === null) 
            ),
        cucco: (
            cucco === true && (zeldasLetter === false || zeldasLetter === null)
            ),
        zeldasLetter: (
            zeldasLetter === true && (keatonMask === false || keatonMask === null)
        ),
        keatonMask: (
            weirdEgg === true && cucco === true && zeldasLetter === true && keatonMask === true &&
            skullMask === false && spookyMask === false && bunnyHood === false && maskOfTruth === false
        ),
        skullMask: (
            weirdEgg === true && cucco === true && zeldasLetter === true && keatonMask === true &&
            skullMask === true && spookyMask === false && bunnyHood === false && maskOfTruth === false
        ),
        spookyMask: (
            weirdEgg === true && cucco === true && zeldasLetter === true && keatonMask === true &&
            skullMask === true && spookyMask === true && bunnyHood === false && maskOfTruth === false
        ),
        bunnyHood: (
            weirdEgg === true && cucco === true && zeldasLetter === true && keatonMask === true &&
            skullMask === true && spookyMask === true && bunnyHood === true && maskOfTruth === false
        ),
        maskOfTruth: (
            weirdEgg === true && cucco === true && zeldasLetter === true && keatonMask === true &&
            skullMask === true && spookyMask === true && bunnyHood === true && maskOfTruth === true
        )
    };

    let add;
    if (conditionals.none) {
        add = addWeirdEgg;
    } else if (conditionals.weirdEgg) {
        add = addCucco;
    } else if (conditionals.cucco) {
        add = addZeldasLetter;
    }

    let remove;
    if (conditionals.weirdEgg) {
        remove = removeWeirdEgg;
    } else if (conditionals.cucco) {
        remove = removeCucco;
    } else if (conditionals.zeldasLetter) {
        remove = removeZeldasLetter;
    }

    let icon;
    if (conditionals.none || conditionals.weirdEgg) {
        icon = WeirdEggIcon;
    } else if (conditionals.cucco) {
        icon = CuccoIcon;
    } else if (conditionals.zeldasLetter) {
        icon = ZeldasLetterIcon;
    }

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={conditionals.none ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={icon} 
            />
        </Grid.Column>
    );
}

export default PastTradeSequence;