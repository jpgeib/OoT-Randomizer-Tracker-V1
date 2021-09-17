import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HylianShieldIcon from "../../../assets/images/Hylian_Shield.png";

const HylianShield = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={HylianShieldIcon} />
        </Grid.Column>
    );
}

export default HylianShield;