import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";

const FairyOcarina = (props) => {

    const { fairyOcarina, addFairyOcarina, removeFairyOcarina } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFairyOcarina}
                onContextMenu={removeFairyOcarina} 
                style={(fairyOcarina === false) ? { filter: "grayscale(50%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={FairyOcarinaIcon} 
            />
        </Grid.Column>
    );
}

export default FairyOcarina;