import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addShadowKey, removeShadowKey, shadowKeys } = props.shadowKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addShadowKey}
                onContextMenu={removeShadowKey}
                style={(shadowKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(shadowKeys === 5) ? { color: "red" } : { color: "black" } } as="h1"><span>{shadowKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;