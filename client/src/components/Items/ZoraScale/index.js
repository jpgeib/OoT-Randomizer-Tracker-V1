import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ZoraScaleIcon from "../../../assets/images/Silver_Scale.png";

const ZoraScale = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={ZoraScaleIcon} />
        </Grid.Column>
    );
}

export default ZoraScale;