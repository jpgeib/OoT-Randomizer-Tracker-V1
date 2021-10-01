import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ZoraSapphireIcon from "../../../../assets/images/Zora's_Sapphire.png";

const ZoraSapphire = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={ZoraSapphireIcon} />
        </Grid.Column>
    );
}

export default ZoraSapphire;