import React from "react";
import { Grid, Image } from "semantic-ui-react";
import OcarinaOfTimeIcon from "../../../assets/images/OcarinaofTime.png";

const OcarinaOfTime = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={OcarinaOfTimeIcon} />
        </Grid.Column>
    );
}

export default OcarinaOfTime;