import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LightArrowsIcon from "../../../assets/images/Light_Arrow.png";

const LightArrows = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={LightArrowsIcon} />
        </Grid.Column>
    );
}

export default LightArrows;