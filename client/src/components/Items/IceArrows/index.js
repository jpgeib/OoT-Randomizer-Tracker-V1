import React from "react";
import { Grid, Image } from "semantic-ui-react";
import IceArrowsIcon from "../../../assets/images/Ice_Arrow.png";

const IceArrows = (props) => {

    const { iceArrows, addIceArrows, removeIceArrows } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addIceArrows}
                onContextMenu={removeIceArrows}
                style={(iceArrows === false || null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={IceArrowsIcon} 
            />
        </Grid.Column>
    );
}

export default IceArrows;