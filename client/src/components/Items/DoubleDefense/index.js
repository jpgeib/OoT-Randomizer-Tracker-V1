import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HeartContainerIcon from "../../../assets/images/sixth-row/Heart_Container_3D.png";

const HeartContainer = (props) => {

    const { doubleDefense, addDoubleDefense, removeDoubleDefense } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addDoubleDefense}
                onContextMenu={removeDoubleDefense}
                style={(doubleDefense === false || doubleDefense === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={HeartContainerIcon} 
            />
        </Grid.Column>
    );
}

export default HeartContainer;