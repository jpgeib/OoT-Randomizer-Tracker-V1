import React from "react";
import { Grid, Image } from "semantic-ui-react";
import MegatonHammerIcon from "../../../assets/images/Megaton_Hammer.png";

const MegatonHammer = (props) => {

    const { megatonHammer, addMegatonHammer, removeMegatonHammer } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addMegatonHammer}
                onContextMenu={removeMegatonHammer} 
                style={(megatonHammer === false || megatonHammer === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={MegatonHammerIcon} 
            />
        </Grid.Column>
    );
}

export default MegatonHammer;