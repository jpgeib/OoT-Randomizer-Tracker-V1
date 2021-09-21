import React from "react";
import { Grid, Image } from "semantic-ui-react";
import SmallKeyIcon from "../../../assets/images/SmallKey.png";

const SmallKey = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={SmallKeyIcon} />
        </Grid.Column>
    );
}

export default SmallKey;