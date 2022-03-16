import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MirrorShieldIcon from "../../../assets/images/Mirror_Shield.png";

const MirrorShield = (props) => {

    const { mirrorShield, addMirrorShield, removeMirrorShield } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addMirrorShield}
                onContextMenu={removeMirrorShield} 
                style={(mirrorShield === false || mirrorShield === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={MirrorShieldIcon} 
            />
        </Grid.Column>
    );
}

export default MirrorShield;