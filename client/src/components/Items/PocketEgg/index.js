import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PocketEggIcon from "../../../assets/images/Pocket_Egg.png";

const PocketEgg = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={PocketEggIcon} />
        </Grid.Column>
    );
}

export default PocketEgg;