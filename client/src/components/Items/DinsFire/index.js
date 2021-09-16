import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DinsFireIcon from "../../../assets/images/Dins-Fire-Model.png";

const DinsFire = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={DinsFireIcon} />
        </Grid.Column>
    );
}

export default DinsFire;