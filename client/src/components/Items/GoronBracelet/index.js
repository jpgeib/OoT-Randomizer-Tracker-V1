import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronBraceletIcon from "../../../assets/images/Goron-Bracelet-Model.png";

const GoronBracelet = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={GoronBraceletIcon} />
        </Grid.Column>
    );
}

export default GoronBracelet;