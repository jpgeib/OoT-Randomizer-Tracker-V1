import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BossKeyIcon from "../../../../assets/images/dungeon-items/Boss_Key_3D.png";

const BossKey = (props) => {

    const { ganonBossKey, addGanonBossKey, removeGanonBossKey } = props.ganonBossKeyLogic;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addGanonBossKey}
                onContextMenu={removeGanonBossKey}
                style={(ganonBossKey === false || ganonBossKey === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={BossKeyIcon} 
            />
        </Grid.Column>
    );
}

export default BossKey;