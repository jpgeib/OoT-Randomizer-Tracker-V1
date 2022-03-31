import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PocketEggIcon from "../../../assets/images/fourth-row/Pocket-Egg.png";

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

    return (
        <Grid.Column width={2}>
            <Image 
                size="mini" 
                src={PocketEggIcon} 
            />
        </Grid.Column>
    );
}

export default FutureTradeSequence;