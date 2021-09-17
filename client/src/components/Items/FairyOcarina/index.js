import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";

const FairyOcarina = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={FairyOcarinaIcon} />
        </Grid.Column>
    );
}

export default FairyOcarina;