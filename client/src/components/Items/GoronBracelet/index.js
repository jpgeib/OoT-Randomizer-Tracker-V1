import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronBraceletIcon from "../../../assets/images/fifth-row/Gorons-Bracelet-3D.png";

const GoronBracelet = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={GoronBraceletIcon} />
        </Grid.Column>
    );
}

export default GoronBracelet;