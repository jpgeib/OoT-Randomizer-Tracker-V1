import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addSpiritKey, removeSpiritKey, spiritKeys } = props.spiritKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addSpiritKey}
                onContextMenu={removeSpiritKey}
                style={(spiritKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(spiritKeys === 5) ? { color: "red" } : { color: "black" } } as="h1"><span>{spiritKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;