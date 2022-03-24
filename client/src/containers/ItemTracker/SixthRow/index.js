import React from "react";
import { Grid } from "semantic-ui-react";
import StoneOfAgony from "../../../components/Items/StoneOfAgony";
import HeartContainer from "../../../components/Items/HeartContainer";
import PieceOfHeart from "../../../components/Items/PieceOfHeart";
import DoubleDefense from "../../../components/Items/DoubleDefense";

const SixthRow = () => {
    return (
        <Grid.Row>
            <StoneOfAgony />
            <PieceOfHeart />
            <HeartContainer />
            <DoubleDefense />
        </Grid.Row>
    );
}

export default SixthRow;