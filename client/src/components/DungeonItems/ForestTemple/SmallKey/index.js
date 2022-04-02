import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addForestKey, removeForestKey, forestKeys } = props.forestKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addForestKey}
                onContextMenu={removeForestKey}
                style={(forestKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(forestKeys === 5) ? { color: "red" } : { color: "black" } } as="h1"><span>{forestKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;