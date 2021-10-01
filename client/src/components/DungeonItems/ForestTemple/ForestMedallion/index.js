import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ForestMedallionIcon from "../../../../assets/images/ForestMedallion.png";

const ForestMedallion = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={ForestMedallionIcon} />
        </Grid.Column>
    );
}

export default ForestMedallion;