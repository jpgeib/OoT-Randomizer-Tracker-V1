import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriBootsIcon from "../../../assets/images/Kokiri-Boots-Model-3D.png";

const KokiriBoots = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={KokiriBootsIcon} />
        </Grid.Column>
    );
}

export default KokiriBoots;