import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DekuShieldIcon from "../../../assets/images/Deku_Shield.png";

const DekuShield = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={DekuShieldIcon} />
        </Grid.Column>
    );
}

export default DekuShield;