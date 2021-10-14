import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/SmallKey.png";

const SmallKey = (props) => {
    
    const { counter, addFireKey, removeFireKey } = props;
    
    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFireKey}
                onContextMenu={removeFireKey}
                style={(counter < 1) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(counter === 8) ? { color: "red" } : { color: "black" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;