import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ShadowMedallionIcon from "../../../../assets/images/ShadowMedallion.png";

const ShadowMedallion = (props) => {
    
    const { hasShadowMedallion, addShadowMedallion, removeShadowMedallion} = props;
    
    return (
        <Grid.Column width={2}>
            <Image
                onClick={addShadowMedallion}
                onContextMenu={removeShadowMedallion}
                style={(hasShadowMedallion === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)"}} 
                size="mini" 
                src={ShadowMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default ShadowMedallion;