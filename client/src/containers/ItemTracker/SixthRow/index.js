import React from "react";
import { Grid } from "semantic-ui-react";
import StoneOfAgony from "../../../components/Items/StoneOfAgony";
import HeartContainer from "../../../components/Items/HeartContainer";
import PieceOfHeart from "../../../components/Items/PieceOfHeart";
import DoubleDefense from "../../../components/Items/DoubleDefense";

const SixthRow = (props) => {

    const { stoneOfAgony, addStoneOfAgony, removeStoneOfAgony } = props.sixthRowLogic.stoneOfAgonyLogic;
    const { piecesOfHeart, addPieceOfHeart, removePieceOfHeart } = props.sixthRowLogic.piecesOfHeartLogic;
    const { heartContainers, addHeartContainer, removeHeartContainer } = props.sixthRowLogic.heartContainersLogic;
    const { doubleDefense, addDoubleDefense, removeDoubleDefense } = props.sixthRowLogic.doubleDefenseLogic;

    return (
        <Grid.Row>
            <StoneOfAgony 
                stoneOfAgony={stoneOfAgony}
                addStoneOfAgony={addStoneOfAgony}
                removeStoneOfAgony={removeStoneOfAgony}
            />
            <PieceOfHeart 
                counter={piecesOfHeart}
                add={addPieceOfHeart}
                remove={removePieceOfHeart}
            />
            <HeartContainer 
                counter={heartContainers}
                add={addHeartContainer}
                remove={removeHeartContainer}
            />
            <DoubleDefense 
                doubleDefense={doubleDefense}
                addDoubleDefense={addDoubleDefense}
                removeDoubleDefense={removeDoubleDefense}
            />
        </Grid.Row>
    );
}

export default SixthRow;