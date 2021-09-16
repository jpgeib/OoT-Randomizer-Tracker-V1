import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DekuNutsIcon from "../../../assets/images/Deku-Nut.png";

const DekuNuts = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={DekuNutsIcon} />
        </Grid.Column>
    );
}

export default DekuNuts;