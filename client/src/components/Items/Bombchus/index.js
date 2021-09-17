import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BombchusIcon from "../../../assets/images/Bombchu.png";

const Bombchus = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={BombchusIcon} />
        </Grid.Column>
    );
}

export default Bombchus;