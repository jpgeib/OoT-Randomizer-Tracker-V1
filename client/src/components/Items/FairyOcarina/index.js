import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";

const FairyOcarina = (props) => {

    const { hasOcarina, gotFairyOcarina, removeFairyOcarina, hasOcarinaOfTime, gotOcarinaOfTime } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(hasOcarina === true && hasOcarinaOfTime === false) ? gotOcarinaOfTime : gotFairyOcarina}
                onContextMenu={removeFairyOcarina} 
                style={(hasOcarina === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={FairyOcarinaIcon} 
            />
        </Grid.Column>
    );
}

export default FairyOcarina;