import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addFortressKey, removeFortressKey, fortressKeys } = props.fortressKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addFortressKey}
                onContextMenu={removeFortressKey}
                style={(fortressKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(fortressKeys === 4) ? { color: "red" } : { color: "black" } } as="h1"><span>{fortressKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;