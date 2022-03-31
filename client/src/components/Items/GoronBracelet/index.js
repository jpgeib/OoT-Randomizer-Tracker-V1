import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronBraceletIcon from "../../../assets/images/fifth-row/Gorons-Bracelet-3D.png";
import SilverGauntletsIcon from "../../../assets/images/fifth-row/Silver-Gauntlets-3D.png";
import GoldenGauntletsIcon from "../../../assets/images/fifth-row/Golden-Gauntlets-3D.png";

const GoronBracelet = (props) => {

    const { 
        goronsBracelet, addGoronsBracelet, removeGoronsBracelet,
        silverGauntlets, addSilverGauntlets, removeSilverGauntlets,
        goldenGauntlets, addGoldenGauntlets, removeGoldenGauntlets 
    } = props;

    const conditionals = {
        none: (goronsBracelet === false || goronsBracelet === null),
        goronsBracelet: (
            goronsBracelet === true && (silverGauntlets === false || silverGauntlets === null)
        ),
        silverGauntlets: (
            silverGauntlets === true && (goldenGauntlets === false || goldenGauntlets === null)
        ),
        goldenGauntlets: goldenGauntlets === true
    };

    let add;
    if (conditionals.none) {
        add = addGoronsBracelet;
    } else if (conditionals.goronsBracelet) {
        add = addSilverGauntlets;
    } else if (conditionals.silverGauntlets) {
        add = addGoldenGauntlets;
    }

    let remove;
    if (conditionals.goronsBracelet) {
        remove = removeGoronsBracelet;
    } else if (conditionals.silverGauntlets) {
        remove = removeSilverGauntlets;
    } else if (conditionals.goldenGauntlets) {
        remove = removeGoldenGauntlets;
    }

    let icon;
    if (conditionals.none || conditionals.goronsBracelet) {
        icon = GoronBraceletIcon;
    } else if (conditionals.silverGauntlets) {
        icon = SilverGauntletsIcon;
    } else if (conditionals.goldenGauntlets) {
        icon = GoldenGauntletsIcon;
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

export default GoronBracelet;