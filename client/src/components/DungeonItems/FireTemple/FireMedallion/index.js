import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FireMedallionIcon from "../../../../assets/images/dungeon-items/Fire-Medallion.png";

const FireMedallion = (props) => {

    const { hasFireMedallion } = props;
    const { addFireMedallion, removeFireMedallion } = props.medallions;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFireMedallion}
                onContextMenu={removeFireMedallion} 
                style={(hasFireMedallion === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }}
                size="mini" 
                src={FireMedallionIcon} 
            />
        </Grid.Column>
    );
}

export default FireMedallion;