import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FaroresWindIcon from "../../../assets/images/Farores_Wind.png";

const FaroresWind = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={FaroresWindIcon} />
        </Grid.Column>
    );
}

export default FaroresWind;