import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronTunicIcon from "../../../assets/images/fourth-row/Goron-Tunic-3D.png";

const GoronTunic = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={GoronTunicIcon} />
        </Grid.Column>
    );
}

export default GoronTunic;