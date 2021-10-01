import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FireMedallionIcon from "../../../../assets/images/FireMedallion.png";

const FireMedallion = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={FireMedallionIcon} />
        </Grid.Column>
    );
}

export default FireMedallion;