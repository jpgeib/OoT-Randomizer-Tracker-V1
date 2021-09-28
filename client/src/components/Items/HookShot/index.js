import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HookShotIcon from "../../../assets/images/Hookshot.png";

const HookShot = (props) => {

    const { removeHookshot, gotHookshot, hasHookshot, notFound } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={gotHookshot}
                onContextMenu={removeHookshot} 
                style={(hasHookshot === false && notFound === true) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={HookShotIcon} 
            />
        </Grid.Column>
    );
}

export default HookShot;