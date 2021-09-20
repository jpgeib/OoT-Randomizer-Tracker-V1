import React from "react";
import { Grid, Image } from "semantic-ui-react";
import RutosLetterIcon from "../../../assets/images/Letter-in-a-Bottle.png";

const RutosLetter = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={RutosLetterIcon} />
        </Grid.Column>
    );
}

export default RutosLetter;