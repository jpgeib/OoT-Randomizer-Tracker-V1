import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LongShotIcon from "../../../assets/images/Longshot.png";

const LongShot = (props) => {

    const { removeLongshot, gotLongshot } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={gotLongshot}
                onContextMenu={removeLongshot}  
                size="mini" 
                src={LongShotIcon} 
            />
        </Grid.Column>
    );
}

export default LongShot;