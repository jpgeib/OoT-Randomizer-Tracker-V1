import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LightMedallionIcon from "../../../../assets/images/dungeon-items/Light-Medallion-3D-Icon.png";

const LightMedallion = (props) => {

    const { lightMedallion, addLightMedallion, removeLightMedallion } = props.lightMedallionLogic;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addLightMedallion}
                onContextMenu={removeLightMedallion} 
                style={(lightMedallion === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={LightMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default LightMedallion;