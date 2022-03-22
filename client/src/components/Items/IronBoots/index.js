import React from "react";
import { Grid, Image } from "semantic-ui-react";
import IronBootsIcon from "../../../assets/images/fifth-row/Iron-Boots-3D.png";

const IronBoots = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={IronBootsIcon} />
        </Grid.Column>
    );
}

export default IronBoots;