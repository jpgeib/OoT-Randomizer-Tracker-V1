import React from "react";
import { Grid, Image } from "semantic-ui-react";
import RutosLetterIcon from "../../../assets/images/fourth-row/Letter-in-a-Bottle.png";

const RutosLetter = (props) => {

    const { rutosLetter, addRutosLetter, removeRutosLetter } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addRutosLetter}
                onContextMenu={removeRutosLetter}
                style={(rutosLetter === false || rutosLetter === null) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" } } 
                size="mini"
                src={RutosLetterIcon}
            />
        </Grid.Column>
    );
};

export default RutosLetter;