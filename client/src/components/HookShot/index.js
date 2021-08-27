import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HookShotIcon from "../../assets/images/Hookshot.png";

const HookShot = () => {
    return (
        <Grid.Column width={1}>
            <Image size="mini" src={HookShotIcon} />
        </Grid.Column>
    );
}

export default HookShot;