import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MirrorShieldIcon from "../../../assets/images/Mirror_Shield.png";

const MirrorShield = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={MirrorShieldIcon} />
        </Grid.Column>
    );
}

export default MirrorShield;