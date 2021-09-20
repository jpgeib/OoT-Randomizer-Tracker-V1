import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LensOfTruthIcon from "../../../assets/images/Lens-of-Truth-Model.png";

const LensOfTruth = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={LensOfTruthIcon} />
        </Grid.Column>
    );
}

export default LensOfTruth;