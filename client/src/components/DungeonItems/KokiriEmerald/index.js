import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriEmeraldIcon from "../../../assets/images/Kokiri_Emerald.png";

const KokiriEmerald = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={KokiriEmeraldIcon} />
        </Grid.Column>
    );
}

export default KokiriEmerald;