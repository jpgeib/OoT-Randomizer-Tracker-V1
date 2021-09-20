import React from "react";
import { Grid, Image } from "semantic-ui-react";
import StoneOfAgonyIcon from "../../../assets/images/Stone_of_Agony.png";

const StoneOfAgony = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={StoneOfAgonyIcon} />
        </Grid.Column>
    );
}

export default StoneOfAgony;