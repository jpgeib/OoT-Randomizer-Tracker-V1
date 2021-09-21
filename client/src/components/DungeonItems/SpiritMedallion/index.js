import React from "react";
import { Grid, Image } from "semantic-ui-react";
import SpiritMedallionIcon from "../../../assets/images/SpiritMedallion.png";

const SpiritMedallion = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={SpiritMedallionIcon} />
        </Grid.Column>
    );
}

export default SpiritMedallion;