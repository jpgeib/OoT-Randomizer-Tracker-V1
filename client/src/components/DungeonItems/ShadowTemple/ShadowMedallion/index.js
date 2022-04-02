import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ShadowMedallionIcon from "../../../../assets/images/dungeon-items/Shadow-Medallion.png";

const ShadowMedallion = (props) => {
    
    const { shadowMedallion, addShadowMedallion, removeShadowMedallion} = props.shadowMedallionLogic;
    
    return (
        <Grid.Column width={2}>
            <Image
                onClick={addShadowMedallion}
                onContextMenu={removeShadowMedallion}
                style={(shadowMedallion === false || shadowMedallion === null) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)"}} 
                size="mini" 
                src={ShadowMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default ShadowMedallion;