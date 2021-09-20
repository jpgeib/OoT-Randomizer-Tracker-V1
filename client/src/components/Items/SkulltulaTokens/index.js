import React from "react";
import { Grid, Image } from "semantic-ui-react";
import SkulltulaTokensIcon from "../../../assets/images/GoldSkulltula.png";

const SkulltulaTokens = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={SkulltulaTokensIcon} />
        </Grid.Column>
    );
}

export default SkulltulaTokens;