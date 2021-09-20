import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BoomerangIcon from "../../../assets/images/Boomerang.png";

const Boomerang = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={BoomerangIcon} />
        </Grid.Column>
    );
}

export default Boomerang;