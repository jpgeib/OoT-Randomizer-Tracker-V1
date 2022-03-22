import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ZoraTunicIcon from "../../../assets/images/fourth-row/Zora-Tunic-3D.png";

const ZoraTunic = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={ZoraTunicIcon} />
        </Grid.Column>
    );
}

export default ZoraTunic;