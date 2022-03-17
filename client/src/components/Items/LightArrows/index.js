import React from "react";
import { Grid, Image } from "semantic-ui-react";
import LightArrowsIcon from "../../../assets/images/Light_Arrow.png";

const LightArrows = (props) => {

    const { lightArrows, addLightArrows, removeLightArrows } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addLightArrows}
                onContextMenu={removeLightArrows} 
                style={(lightArrows === false || lightArrows === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={LightArrowsIcon} 
            />
        </Grid.Column>
    );
}

export default LightArrows;