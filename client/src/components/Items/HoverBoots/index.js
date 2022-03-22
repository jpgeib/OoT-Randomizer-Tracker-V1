import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HoverBootsIcon from "../../../assets/images/fifth-row/Hover-Boots-3D.png";

const HoverBoots = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={HoverBootsIcon} />
        </Grid.Column>
    );
}

export default HoverBoots;