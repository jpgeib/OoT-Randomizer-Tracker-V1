import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BossKeyIcon from "../../../../assets/images/Boss_Key.png";

const BossKey = (props) => {

    const { hasShadowBossKey, addShadowBossKey, removeShadowBossKey} = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addShadowBossKey}
                onContextMenu={removeShadowBossKey}
                style={(hasShadowBossKey === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={BossKeyIcon} 
            />
        </Grid.Column>
    );
}

export default BossKey;