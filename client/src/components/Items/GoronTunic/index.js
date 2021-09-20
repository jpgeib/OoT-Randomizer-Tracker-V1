import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronTunicIcon from "../../../assets/images/Goron_Tunic.png";

const GoronTunic = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={GoronTunicIcon} />
        </Grid.Column>
    );
}

export default GoronTunic;