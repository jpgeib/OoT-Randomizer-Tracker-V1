import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MasterSwordIcon from "../../assets/images/Master_Sword.png";

const MasterSword = () => {
    return (
        <Grid.Column width={1}>
            <Image size="mini" src={MasterSwordIcon} />
        </Grid.Column>
    );
}

export default MasterSword;