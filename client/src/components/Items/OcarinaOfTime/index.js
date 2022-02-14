import React from "react";
import { Grid, Image } from "semantic-ui-react";
import OcarinaOfTimeIcon from "../../../assets/images/OcarinaofTime.png";

const OcarinaOfTime = (props) => {

    const { removeOcarinaOfTime } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onContextMenu={removeOcarinaOfTime}
                size="mini" 
                src={OcarinaOfTimeIcon} 
            />
        </Grid.Column>
    );
}

export default OcarinaOfTime;