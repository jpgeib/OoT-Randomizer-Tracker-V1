import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ZoraSapphireIcon from "../../../../assets/images/Zora's_Sapphire.png";

const ZoraSapphire = (props) => {

    const { hasZoraSapphire, addZoraSapphire, removeZoraSapphire } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addZoraSapphire}
                onContextMenu={removeZoraSapphire}
                style={(hasZoraSapphire === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={ZoraSapphireIcon} 
            />
        </Grid.Column>
    );
}

export default ZoraSapphire;