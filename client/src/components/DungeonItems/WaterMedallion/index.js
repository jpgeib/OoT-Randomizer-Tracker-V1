import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WaterMedallionIcon from "../../../assets/images/WaterMedallion.png";

const WaterMedallion = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={WaterMedallionIcon} />
        </Grid.Column>
    );
}

export default WaterMedallion;