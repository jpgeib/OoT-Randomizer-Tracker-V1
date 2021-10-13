import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BossKeyIcon from "../../../../assets/images/Boss_Key.png";

const BossKey = (props) => {

    const { hasFireBossKey } = props;
    const { addFireBossKey, removeFireBossKey } = props.bossKeys;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFireBossKey}
                onContextMenu={removeFireBossKey} 
                style={(hasFireBossKey === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={BossKeyIcon} 
            />
        </Grid.Column>
    );
}

export default BossKey;