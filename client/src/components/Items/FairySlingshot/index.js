import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairySlingshotIcon from "../../../assets/images/FairySlingshot.png";

const FairySlingshot = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={FairySlingshotIcon} />
        </Grid.Column>
    );
}

export default FairySlingshot;