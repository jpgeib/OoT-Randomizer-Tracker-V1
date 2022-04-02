import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ZoraSapphireIcon from "../../../../assets/images/dungeon-items/Zoras-Sapphire.png";

const ZoraSapphire = (props) => {

    const { zoraSapphire, addZoraSapphire, removeZoraSapphire } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addZoraSapphire}
                onContextMenu={removeZoraSapphire}
                style={(zoraSapphire === false || zoraSapphire === null) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={ZoraSapphireIcon} 
            />
        </Grid.Column>
    );
}

export default ZoraSapphire;