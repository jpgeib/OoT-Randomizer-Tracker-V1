import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriSwordIcon from "../../../assets/images/Kokiri_Sword.png";

const KokiriSword = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={KokiriSwordIcon} />
        </Grid.Column>
    );
}

export default KokiriSword;