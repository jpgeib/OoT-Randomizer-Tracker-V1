import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PocketEggIcon from "../../../assets/images/fourth-row/Pocket-Egg.png";
import PocketCuccoIcon from "../../../assets/images/fourth-row/Pocket-Cucco.png";
import CojiroIcon from "../../../assets/images/fourth-row/Cojiro-Icon.png";
import OddMushroomIcon from "../../../assets/images/fourth-row/Odd-Mushroom.png";
import OddPotionIcon from "../../../assets/images/fourth-row/Odd-Potion.png";
import PoachersSawIcon from "../../../assets/images/fourth-row/Poachers-Saw.png";
import BrokenGoronsSwordIcon from "../../../assets/images/fourth-row/Broken-Goron-Sword.png";
import PrescriptionIcon from "../../../assets/images/fourth-row/Prescription.png";
import EyeballFrogIcon from "../../../assets/images/fourth-row/Eyeball-Frog.png";
import EyeDropsIcon from "../../../assets/images/fourth-row/Eye-Drops.png";
import ClaimCheckIcon from "../../../assets/images/fourth-row/Claim-Check.png";

const FutureTradeSequence = (props) => {

    const { pocketEgg, addPocketEgg, removePocketEgg } = props.pocketEggLogic;
    const { pocketCucco, addPocketCucco, removePocketCucco } = props.pocketCuccoLogic;
    const { cojiro, addCojiro, removeCojiro } = props.cojiroLogic;
    const { oddMushroom, addOddMushroom, removeOddMushroom } = props.oddMushroomLogic;
    const { oddPotion, addOddPotion, removeOddPotion } = props.oddPotionLogic;
    const { poachersSaw, addPoachersSaw, removePoachersSaw } = props.poachersSawLogic;
    const { brokenGoronsSword, addBrokenGoronsSword, removeBrokenGoronsSword } = props.brokenGoronsSwordLogic;
    const { prescription, addPrescription, removePrescription } = props.prescriptionLogic;
    const { eyeballFrog, addEyeballFrog, removeEyeballFrog } = props.eyeballFrogLogic;
    const { eyeDrops, addEyeDrops, removeEyeDrops } = props.eyeDropsLogic;
    const { claimCheck, addClaimCheck, removeClaimCheck } = props.claimCheckLogic;

    const conditionals = {
        none: (pocketEgg === false || pocketEgg === null),
        pocketEgg: (
            pocketEgg === true && (pocketCucco === false || pocketCucco === null)
        ),
        pocketCucco: (
            pocketCucco === true && (cojiro === false || cojiro === null)
        ),
        cojiro: (
            cojiro === true && (oddMushroom === false || oddMushroom === null)
        ),
        oddMushroom: (
            oddMushroom === true && (oddPotion === false || oddPotion === null)
        ),
        oddPotion: (
            oddPotion === true && (poachersSaw === false || poachersSaw === null)
        ),
        poachersSaw: (
            poachersSaw === true && (brokenGoronsSword === false || brokenGoronsSword === null)
        ),
        brokenGoronsSword: (
            brokenGoronsSword === true && (prescription === false || prescription === null)
        ),
        prescription: (
            prescription === true && (eyeballFrog === false || eyeballFrog === null)
        ),
        eyeballFrog: (
            eyeballFrog === true && (eyeDrops === false || eyeDrops === null)
        ),
        eyeDrops: (
            eyeDrops === true && (claimCheck === false || claimCheck === null)
        ),
        claimCheck: claimCheck === true
    };

    let add;
    if (conditionals.none) {
        add = addPocketEgg;
    } else if (conditionals.pocketEgg) {
        add = addPocketCucco;
    } else if (conditionals.pocketCucco) {
        add = addCojiro;
    } else if (conditionals.cojiro) {
        add = addOddMushroom;
    } else if (conditionals.oddMushroom) {
        add = addOddPotion;
    } else if (conditionals.oddPotion) {
        add = addPoachersSaw;
    } else if (conditionals.poachersSaw) {
        add = addBrokenGoronsSword;
    } else if (conditionals.brokenGoronsSword) {
        add = addPrescription;
    } else if (conditionals.prescription) {
        add = addEyeballFrog;
    } else if (conditionals.eyeballFrog) {
        add = addEyeDrops;
    } else if (conditionals.eyeDrops) {
        add = addClaimCheck;
    }

    let remove;
    if (conditionals.pocketEgg) {
        remove = removePocketEgg;
    } else if (conditionals.pocketCucco) {
        remove = removePocketCucco;
    } else if (conditionals.cojiro) {
        remove = removeCojiro;
    } else if (conditionals.oddMushroom) {
        remove = removeOddMushroom;
    } else if (conditionals.oddPotion) {
        remove = removeOddPotion;
    } else if (conditionals.poachersSaw) {
        remove = removePoachersSaw;
    } else if (conditionals.brokenGoronsSword) {
        remove = removeBrokenGoronsSword;
    } else if (conditionals.prescription) {
        remove = removePrescription;
    } else if (conditionals.eyeballFrog) {
        remove = removeEyeballFrog;
    } else if (conditionals.eyeDrops) {
        remove = removeEyeDrops;
    } else if (conditionals.claimCheck) {
        remove = removeClaimCheck;
    }

    let icon;
    if (conditionals.none || conditionals.pocketEgg) {
        icon = PocketEggIcon;
    } else if (conditionals.pocketCucco) {
        icon = PocketCuccoIcon;
    } else if (conditionals.cojiro) {
        icon = CojiroIcon;
    } else if (conditionals.oddMushroom) {
        icon = OddMushroomIcon;
    } else if (conditionals.oddPotion) {
        icon = OddPotionIcon;
    } else if (conditionals.poachersSaw) {
        icon = PoachersSawIcon;
    } else if (conditionals.brokenGoronsSword) {
        icon = BrokenGoronsSwordIcon;
    } else if (conditionals.prescription) {
        icon = PrescriptionIcon;
    } else if (conditionals.eyeballFrog) {
        icon = EyeballFrogIcon;
    } else if (conditionals.eyeDrops) {
        icon = EyeDropsIcon;
    } else if (conditionals.claimCheck) {
        icon = ClaimCheckIcon;
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

export default FutureTradeSequence;