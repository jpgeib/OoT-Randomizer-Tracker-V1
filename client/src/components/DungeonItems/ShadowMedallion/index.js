import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ShadowMedallionIcon from "../../../assets/images/ShadowMedallion.png";

const ShadowMedallion = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={ShadowMedallionIcon} />
        </Grid.Column>
    );
}

export default ShadowMedallion;