import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HeartContainerIcon from "../../../assets/images/sixth-row/Heart_Container_3D.png";

const HeartContainer = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={HeartContainerIcon} />
        </Grid.Column>
    );
}

export default HeartContainer;