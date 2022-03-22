import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriTunicIcon from "../../../assets/images/fourth-row/Kokiri-Tunic-3D.png";

const KokiriTunic = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={KokiriTunicIcon} />
        </Grid.Column>
    );
}

export default KokiriTunic;