import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ForestMedallionIcon from "../../../../assets/images/dungeon-items/Forest-Medallion.png";

const ForestMedallion = (props) => {

    const { forestMedallion, addForestMedallion, removeForestMedallion } = props.forestMedallionLogic;

    return (
        <Grid.Column width={2}>
            <Image
            onClick={addForestMedallion}
            onContextMenu={removeForestMedallion} 
            style={(forestMedallion === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
            size="mini" 
            src={ForestMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default ForestMedallion;