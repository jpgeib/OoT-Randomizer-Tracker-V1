import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addWellKey, removeWellKey, counter } = props;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addWellKey}
                onContextMenu={removeWellKey}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(counter === 3) ? { color: "red" } : { color: "black" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;