import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BombBagIcon from "../../../assets/images/BombBag.png";

const BombBag = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={BombBagIcon} />
        </Grid.Column>
    );
}

export default BombBag;