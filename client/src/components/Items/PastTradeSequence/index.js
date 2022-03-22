import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WeirdEggIcon from "../../../assets/images/fourth-row/Weird-Egg.png";

const PastTradeSequence = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={WeirdEggIcon} />
        </Grid.Column>
    );
}

export default PastTradeSequence;