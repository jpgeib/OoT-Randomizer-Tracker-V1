import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FireArrowsIcon from "../../../assets/images/Fire_Arrow.png";

const FireArrows = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={FireArrowsIcon} />
        </Grid.Column>
    );
}

export default FireArrows;