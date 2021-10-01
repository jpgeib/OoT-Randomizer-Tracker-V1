import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SkulltulaTokensIcon from "../../../assets/images/GoldSkulltula.png";

const SkulltulaTokens = (props) => {

    const { counter, increment, decrement } = props;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={increment} 
                onContextMenu={decrement}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} } 
                size="mini" 
                src={SkulltulaTokensIcon} 
            />
            <Header style={(counter >= 50) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default SkulltulaTokens;