import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MagicBeansIcon from "../../../assets/images/Magic-Bean-Model.png";

const MagicBeans = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={MagicBeansIcon} />
        </Grid.Column>
    );
}

export default MagicBeans;