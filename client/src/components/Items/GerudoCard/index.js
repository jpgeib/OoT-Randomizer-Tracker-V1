import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GerudoCardIcon from "../../../assets/images/fifth-row/Gerudo-Token.png";

const GerudoCard = (props) => {

    const { gerudoCard, addGerudoCard, removeGerudoCard } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addGerudoCard}
                onContextMenu={removeGerudoCard}
                style={(gerudoCard === false || gerudoCard === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={GerudoCardIcon} 
            />
        </Grid.Column>
    );
}

export default GerudoCard;