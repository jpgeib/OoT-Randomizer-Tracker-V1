import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BossKeyIcon from "../../../assets/images/Boss_Key.png";

const BossKey = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={BossKeyIcon} />
        </Grid.Column>
    );
}

export default BossKey;