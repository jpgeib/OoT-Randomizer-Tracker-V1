import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HylianShieldIcon from "../../../assets/images/Hylian_Shield.png";

const HylianShield = (props) => {

    const { hylianShield, addHylianShield, removeHylianShield } = props;
    
    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addHylianShield}
                onContextMenu={removeHylianShield} 
                style={(hylianShield === false || hylianShield === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={HylianShieldIcon}
                 
            />
        </Grid.Column>
    );
}

export default HylianShield;