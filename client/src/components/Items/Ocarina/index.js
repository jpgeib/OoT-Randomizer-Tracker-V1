import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";
import OcarinaOfTimeIcon from "../../../assets/images/OcarinaofTime.png";

const Ocarina = (props) => {

    const { fairyOcarina, addFairyOcarina, removeFairyOcarina } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFairyOcarina}
                onContextMenu={removeFairyOcarina}
                size="mini" 
                src={FairyOcarinaIcon}
                style={(fairyOcarina === false || fairyOcarina === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
            />
        </Grid.Column>
    );
}

export default Ocarina;