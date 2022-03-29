import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HoverBootsIcon from "../../../assets/images/fifth-row/Hover-Boots-3D.png";

const HoverBoots = (props) => {

    const { hoverBoots, addHoverBoots, removeHoverBoots } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addHoverBoots}
                onContextMenu={removeHoverBoots}
                style={(hoverBoots === false || hoverBoots === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={HoverBootsIcon} 
            />
        </Grid.Column>
    );
}

export default HoverBoots;