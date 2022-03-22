import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MasterSwordIcon from "../../../assets/images/first-row/Master-Sword-3D.png";

const MasterSword = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={MasterSwordIcon} />
        </Grid.Column>
    );
}

export default MasterSword;