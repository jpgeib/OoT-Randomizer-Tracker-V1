import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FairyOcarinaIcon from "../../../assets/images/FairyOcarina.png";
import OcarinaOfTimeIcon from "../../../assets/images/OcarinaofTime.png";

const Ocarina = (props) => {

    return (
        <Grid.Column width={2}>
            <Image
                size="mini" 
                src={FairyOcarinaIcon} 
            />
        </Grid.Column>
    );
}

export default Ocarina;