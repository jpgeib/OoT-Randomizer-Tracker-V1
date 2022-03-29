import React from "react";
import { Grid, Image } from "semantic-ui-react";
import IronBootsIcon from "../../../assets/images/fifth-row/Iron-Boots-3D.png";

const IronBoots = (props) => {

    const { ironBoots, addIronBoots, removeIronBoots } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addIronBoots}
                onContextMenu={removeIronBoots}
                style={(ironBoots === false || ironBoots === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={IronBootsIcon} 
            />
        </Grid.Column>
    );
}

export default IronBoots;