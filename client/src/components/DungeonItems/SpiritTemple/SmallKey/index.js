import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/SmallKey.png";

const SmallKey = (props) => {

    const { addSpiritKey, removeSpiritKey, counter } = props;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addSpiritKey}
                onContextMenu={removeSpiritKey}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(counter === 5) ? { color: "red" } : { color: "black" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;