import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FaroresWindIcon from "../../../assets/images/Farores_Wind.png";

const FaroresWind = (props) => {

    const { faroresWind, addFaroresWind, removeFaroresWind } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFaroresWind}
                onContextMenu={removeFaroresWind}
                style={(faroresWind === false || null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={FaroresWindIcon} 
            />
        </Grid.Column>
    );
}

export default FaroresWind;