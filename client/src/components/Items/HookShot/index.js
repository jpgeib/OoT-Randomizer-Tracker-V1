import React from "react";
import { Grid, Image } from "semantic-ui-react";
import HookShotIcon from "../../../assets/images/Hookshot.png";
import LongShotIcon from "../../../assets/images/Longshot.png";

const HookShot = (props) => {

    const { hookshot, addHookshot, removeHookshot, longshot, addLongshot, removeLongshot } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={(hookshot === true) ? addLongshot : addHookshot}
                onContextMenu={(hookshot === true && longshot === true) ? removeLongshot : removeHookshot} 
                style={(hookshot === false || hookshot === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={(hookshot === true && longshot === true) ? LongShotIcon : HookShotIcon} 
            />
        </Grid.Column>
    );
}

export default HookShot;