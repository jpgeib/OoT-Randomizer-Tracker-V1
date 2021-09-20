import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MagicMeterIcon from "../../../assets/images/MagicJaroot.png";

const MagicMeter = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={MagicMeterIcon} />
        </Grid.Column>
    );
}

export default MagicMeter;