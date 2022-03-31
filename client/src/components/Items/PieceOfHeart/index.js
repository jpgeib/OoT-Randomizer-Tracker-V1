import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import PieceOfHeartIcon from "../../../assets/images/sixth-row/Piece_of_Heart_3D.png";

const PieceOfHeart = (props) => {

    const { counter, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={PieceOfHeartIcon} 
            />
            <Header style={(counter >= 36) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default PieceOfHeart;