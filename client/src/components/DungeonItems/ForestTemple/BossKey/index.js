import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BossKeyIcon from "../../../../assets/images/dungeon-items/Boss_Key_3D.png";

const BossKey = (props) => {

    const { forestBossKey, addForestBossKey, removeForestBossKey } = props.forestBossKeyLogic;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addForestBossKey}
                onContextMenu={removeForestBossKey}
                style={(forestBossKey === false || forestBossKey === null ) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={BossKeyIcon} 
            />
        </Grid.Column>
    );
}

export default BossKey;