import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LensOfTruthIcon from "../../../assets/images/third-row/Lens-of-Truth-3D.png";

const LensOfTruth = (props) => {

    const { lensOfTruth, addLensOfTruth, removeLensOfTruth } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addLensOfTruth}
                onContextMenu={removeLensOfTruth} 
                style={(lensOfTruth === false || lensOfTruth === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={LensOfTruthIcon} 
            />
        </Grid.Column>
    );
}

export default LensOfTruth;