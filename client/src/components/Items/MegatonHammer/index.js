import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MegatonHammerIcon from "../../../assets/images/Megaton_Hammer.png";

const MegatonHammer = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={MegatonHammerIcon} />
        </Grid.Column>
    );
}

export default MegatonHammer;