import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FireMedallionIcon from "../../../../assets/images/dungeon-items/Fire-Medallion.png";

const FireMedallion = (props) => {

    const { fireMedallion, addFireMedallion, removeFireMedallion } = props.fireMedallionLogic;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFireMedallion}
                onContextMenu={removeFireMedallion} 
                style={(fireMedallion === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }}
                size="mini" 
                src={FireMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default FireMedallion;