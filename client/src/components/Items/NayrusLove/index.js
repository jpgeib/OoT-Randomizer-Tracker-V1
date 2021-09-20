import React from "react";
import { Grid, Image } from "semantic-ui-react";
import NayrusLoveIcon from "../../../assets/images/Nayrus_Love.png";

const NayrusLove = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={NayrusLoveIcon} />
        </Grid.Column>
    );
}

export default NayrusLove;