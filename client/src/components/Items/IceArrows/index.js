import React from "react";
import { Grid, Image } from "semantic-ui-react";
import IceArrowsIcon from "../../../assets/images/Ice_Arrow.png";

const IceArrows = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={IceArrowsIcon} />
        </Grid.Column>
    );
}

export default IceArrows;