import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HookShotIcon from "../../../assets/images/Hookshot.png";

const HookShot = (props) => {

    const { removeHookshot, gotHookshot, hasHookshot, noHookshot, hasLongshot, gotLongshot } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(hasHookshot === true && hasLongshot === false) ? gotLongshot : gotHookshot}
                onContextMenu={removeHookshot} 
                style={(hasHookshot === false && noHookshot === true) ? { filter: "grayscale(50%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={HookShotIcon} 
            />
        </Grid.Column>
    );
}

export default HookShot;