import React from "react";
import { Grid, Image } from "semantic-ui-react";
import PieceOfHeartIcon from "../../../assets/images/sixth-row/Piece_of_Heart_3D.png";

const PieceOfHeart = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={PieceOfHeartIcon} />
        </Grid.Column>
    );
}

export default PieceOfHeart;