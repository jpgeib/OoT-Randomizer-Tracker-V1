import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BigGoronSwordIcon from "../../../assets/images/BiggoronSword.png";

const BigGoronSword = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={BigGoronSwordIcon} />
        </Grid.Column>
    );
}

export default BigGoronSword;