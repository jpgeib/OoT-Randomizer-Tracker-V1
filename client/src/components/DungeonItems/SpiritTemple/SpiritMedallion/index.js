import React from "react";
import { Grid, Image } from "semantic-ui-react";
import SpiritMedallionIcon from "../../../../assets/images/dungeon-items/Spirit-Medallion.png";

const SpiritMedallion = (props) => {
    
    const { hasSpiritMedallion, addSpiritMedallion, removeSpiritMedallion} = props;
    
    return (
        <Grid.Column width={2}>
            <Image
                onClick={addSpiritMedallion}
                onContextMenu={removeSpiritMedallion}
                style={(hasSpiritMedallion === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)"}} 
                size="mini" 
                src={SpiritMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default SpiritMedallion;