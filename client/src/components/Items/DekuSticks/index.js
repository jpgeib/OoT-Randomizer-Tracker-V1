import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DekuSticksIcon from "../../../assets/images/Deku_Stick.png";

const DekuSticks = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={DekuSticksIcon} />
        </Grid.Column>
    );
}

export default DekuSticks;