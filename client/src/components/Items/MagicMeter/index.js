import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MagicMeterIcon from "../../../assets/images/fifth-row/Magic-Jar-Small-3D-Icon.png";
import DoubleMagicMeterIcon from "../../../assets/images/fifth-row/Magic-Jar-Large-3D-Icon.png";

const MagicMeter = (props) => {

    const { magic, addMagic, removeMagic, doubleMagic, addDoubleMagic, removeDoubleMagic } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(magic === true) ? addDoubleMagic : addMagic}
                onContextMenu={(magic === true && doubleMagic === true) ? removeDoubleMagic : removeMagic}
                style={(magic === false || magic === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={(magic === true && doubleMagic === true) ? DoubleMagicMeterIcon : MagicMeterIcon} 
            />
        </Grid.Column>
    );
}

export default MagicMeter;