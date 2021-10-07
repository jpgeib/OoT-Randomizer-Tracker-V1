import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import EmptyBottleIcon from "../../../assets/images/Bottle-Model.png";

const EmptyBottle = (props) => {

    const { emptyBottles, addBottle, removeBottle } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addBottle}
                onContextMenu={removeBottle}
                style={(emptyBottles < 1) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={EmptyBottleIcon} 
            />
            <Header style={(emptyBottles === 4) ? { color: "red" } : { color: "white" } } as="h1"><span>{emptyBottles}</span></Header>
        </Grid.Column>
    );
}

export default EmptyBottle;