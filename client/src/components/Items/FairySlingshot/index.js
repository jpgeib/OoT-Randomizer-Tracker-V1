import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import FairySlingshotIcon from "../../../assets/images/FairySlingshot.png";

const FairySlingshot = (props) => {

    const { counter, add, remove } = props;
    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}} 
                size="mini" 
                src={FairySlingshotIcon} 
            />
            <Header style={(counter >= 50) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default FairySlingshot;