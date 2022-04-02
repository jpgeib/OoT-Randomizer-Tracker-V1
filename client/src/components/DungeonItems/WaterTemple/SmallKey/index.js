import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addWaterKey, removeWaterKey, waterKeys } = props.waterKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addWaterKey}
                onContextMenu={removeWaterKey}
                style={(waterKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(waterKeys === 6) ? { color: "red" } : { color: "black" } } as="h1"><span>{waterKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;