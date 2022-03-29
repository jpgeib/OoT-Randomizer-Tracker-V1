import React from "react";
import { Grid, Image } from "semantic-ui-react";
import SilverScaleIcon from "../../../assets/images/fifth-row/Silver-Scale-3D.png";
import GoldenScaleIcon from "../../../assets/images/fifth-row/Golden-Scale-3D.png";

const ZoraScale = (props) => {

    const { silverScale, addSilverScale, removeSilverScale, goldenScale, addGoldenScale, removeGoldenScale } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(silverScale === true) ? addGoldenScale : addSilverScale}
                onContextMenu={(silverScale === true && goldenScale === true) ? removeGoldenScale : removeSilverScale}
                style={(silverScale === false || silverScale === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={(silverScale === true && goldenScale === true) ? GoldenScaleIcon : SilverScaleIcon} 
            />
        </Grid.Column>
    );
}

export default ZoraScale;