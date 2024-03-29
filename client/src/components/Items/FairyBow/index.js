import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import FairyBowIcon from "../../../assets/images/first-row/Bow-3D.png";

const FairyBow = (props) => {

    const { counter, add, remove, counterStyle } = props;

    return (
        <Grid.Column width={2}>
            <div style={{position: "relative"}}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}} 
                size="mini" 
                src={FairyBowIcon} 
            />
            <Header style={(counter >= 50) ? { color: "red" } : { color: "white" } } as="h1"><span style={counterStyle}>{counter}</span></Header>
            </div>
        </Grid.Column>
    );
}

export default FairyBow;