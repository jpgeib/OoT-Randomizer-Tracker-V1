import React from "react";
import { Grid, Image } from "semantic-ui-react";
import CompassIcon from "../../../../assets/images/dungeon-items/Compass_3D.png";

const Compass = (props) => {

    const { hasCompass, gotCompass, removeCompass } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={gotCompass}
                onContextMenu={removeCompass}
                style={(hasCompass === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={CompassIcon}
            />
        </Grid.Column>
    );
}

export default Compass;