import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LightMedallionIcon from "../../../assets/images/Light-Medallion.png";

const LightMedallion = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={LightMedallionIcon} />
        </Grid.Column>
    );
}

export default LightMedallion;