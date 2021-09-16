import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyBowIcon from "../../../assets/images/Bow-3D.png";

const FairyBow = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={FairyBowIcon} />
        </Grid.Column>
    );
}

export default FairyBow;