import React from "react";
import { Grid, Image } from "semantic-ui-react";
import CompassIcon from "../../../../assets/images/Compass.png";

const Compass = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={CompassIcon} />
        </Grid.Column>
    );
}

export default Compass;