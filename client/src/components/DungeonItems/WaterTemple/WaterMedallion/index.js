import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WaterMedallionIcon from "../../../../assets/images/dungeon-items/Water-Medallion.png";

const WaterMedallion = (props) => {

    const { waterMedallion, addWaterMedallion, removeWaterMedallion } = props.waterMedallionLogic;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addWaterMedallion}
                onContextMenu={removeWaterMedallion}
                style={(waterMedallion === false || waterMedallion === null) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={WaterMedallionIcon} />
        </Grid.Column>
    );
}

export default WaterMedallion;