import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WeirdEggIcon from "../../../assets/images/fourth-row/Weird-Egg.png";
import CuccoIcon from "../../../assets/images/fourth-row/Cucco-3D.png";
import ZeldasLetterIcon from "../../../assets/images/fourth-row/Zeldas-Letter.png";
import KeatonMaskIcon from "../../../assets/images/fourth-row/Keaton-Mask-Icon.png";
import SkullMaskIcon from "../../../assets/images/fourth-row/Skull-Mask-Icon.png";
import SpookyMaskIcon from "../../../assets/images/fourth-row/Spooky-Mask-Icon.png";
import BunnyHoodIcon from "../../../assets/images/fourth-row/Bunny-Hood-Mask-Icon.png";
import MaskOfTruthIcon from "../../../assets/images/fourth-row/Mask-of-Truth-Mask-Icon.png";

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
            keatonMask === true && (skullMask === false || skullMask === null)
        ),
        skullMask: (
            skullMask === true && (spookyMask === false || spookyMask === null)
        ),
        spookyMask: (
            spookyMask === true && (bunnyHood === false || bunnyHood === null)
        ),
        bunnyHood: (
            bunnyHood === true && (maskOfTruth === false || maskOfTruth === null)
        ),
        maskOfTruth: maskOfTruth === true
    };

    let add;
    if (conditionals.none) {
        add = addWeirdEgg;
    } else if (conditionals.weirdEgg) {
        add = addCucco;
    } else if (conditionals.cucco) {
        add = addZeldasLetter;
    } else if (conditionals.zeldasLetter) {
        add = addKeatonMask;
    } else if (conditionals.keatonMask) {
        add = addSkullMask;
    } else if (conditionals.skullMask) {
        add = addSpookyMask;
    } else if (conditionals.spookyMask) {
        add = addBunnyHood;
    } else if (conditionals.bunnyHood) {
        add = addMaskOfTruth;
    }

    let remove;
    if (conditionals.weirdEgg) {
        remove = removeWeirdEgg;
    } else if (conditionals.cucco) {
        remove = removeCucco;
    } else if (conditionals.zeldasLetter) {
        remove = removeZeldasLetter;
    } else if (conditionals.keatonMask) {
        remove = removeKeatonMask;
    } else if (conditionals.skullMask) {
        remove = removeSkullMask;
    } else if (conditionals.spookyMask) {
        remove = removeSpookyMask;
    } else if (conditionals.bunnyHood) {
        remove = removeBunnyHood;
    } else if (conditionals.maskOfTruth) {
        remove = removeMaskOfTruth;
    }

    let icon;
    if (conditionals.none || conditionals.weirdEgg) {
        icon = WeirdEggIcon;
    } else if (conditionals.cucco) {
        icon = CuccoIcon;
    } else if (conditionals.zeldasLetter) {
        icon = ZeldasLetterIcon;
    } else if (conditionals.keatonMask) {
        icon = KeatonMaskIcon;
    } else if (conditionals.skullMask) {
        icon = SkullMaskIcon;
    } else if (conditionals.spookyMask) {
        icon = SpookyMaskIcon;
    } else if (conditionals.bunnyHood) {
        icon = BunnyHoodIcon;
    } else if (conditionals.maskOfTruth) {
        icon = MaskOfTruthIcon;
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