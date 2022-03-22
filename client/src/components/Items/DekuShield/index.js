import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DekuShieldIcon from "../../../assets/images/second-row/Deku-Shield-3D.png";

const DekuShield = (props) => {

    const { dekuShield, addDekuShield, removeDekuShield } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addDekuShield}
                onContextMenu={removeDekuShield} 
                size="mini" 
                src={DekuShieldIcon}
                style={(dekuShield === false || dekuShield === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
            />
        </Grid.Column>
    );
}

export default DekuShield;