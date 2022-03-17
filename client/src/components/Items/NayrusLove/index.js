import React from "react";
import { Grid, Image } from "semantic-ui-react";
import NayrusLoveIcon from "../../../assets/images/Nayrus_Love.png";

const NayrusLove = (props) => {

    const { nayrusLove, addNayrusLove, removeNayrusLove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addNayrusLove}
                onContextMenu={removeNayrusLove} 
                style={(nayrusLove === false || nayrusLove === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={NayrusLoveIcon} 
            />
        </Grid.Column>
    );
}

export default NayrusLove;