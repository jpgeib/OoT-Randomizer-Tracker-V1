import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";
import OcarinaOfTimeIcon from "../../../assets/images/OcarinaofTime.png";

const Ocarina = (props) => {

    const { fairyOcarina, addFairyOcarina, removeFairyOcarina, ocarinaOfTime, addOcarinaOfTime, removeOcarinaOfTime } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(fairyOcarina === true) ? addOcarinaOfTime : addFairyOcarina}
                onContextMenu={(fairyOcarina === true && ocarinaOfTime === true) ? removeOcarinaOfTime : removeFairyOcarina}
                size="mini" 
                src={(fairyOcarina === true && ocarinaOfTime === true) ? OcarinaOfTimeIcon : FairyOcarinaIcon}
                style={(fairyOcarina === false || fairyOcarina === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
            />
        </Grid.Column>
    );
}

export default Ocarina;