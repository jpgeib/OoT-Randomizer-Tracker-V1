import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addGanonKey, removeGanonKey, ganonKeys } = props.ganonKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addGanonKey}
                onContextMenu={removeGanonKey}
                style={(ganonKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(ganonKeys === 2) ? { color: "red" } : { color: "black" } } as="h1"><span>{ganonKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;