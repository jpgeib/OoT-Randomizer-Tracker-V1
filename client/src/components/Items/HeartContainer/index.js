import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import HeartContainerIcon from "../../../assets/images/sixth-row/Heart_Container_3D.png";

const HeartContainer = (props) => {

    const { counter, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={HeartContainerIcon} 
            />
            <Header style={(counter >= 8) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default HeartContainer;