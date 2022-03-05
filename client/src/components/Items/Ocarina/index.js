import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";
import OcarinaOfTimeIcon from "../../../assets/images/OcarinaofTime.png";

const Ocarina = (props) => {

    const { hasOcarina, gotFairyOcarina, removeFairyOcarina, hasOcarinaOfTime, gotOcarinaOfTime, removeOcarinaOfTime } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(hasOcarina === true && hasOcarinaOfTime === false) ? gotOcarinaOfTime : gotFairyOcarina}
                onContextMenu={(hasOcarina === true && hasOcarinaOfTime === true) ? removeOcarinaOfTime : removeFairyOcarina} 
                style={(hasOcarina === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={(hasOcarina === true && hasOcarinaOfTime === true) ? OcarinaOfTimeIcon : FairyOcarinaIcon} 
            />
        </Grid.Column>
    );
}

export default Ocarina;