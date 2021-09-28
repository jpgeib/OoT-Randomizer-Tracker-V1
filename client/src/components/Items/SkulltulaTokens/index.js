import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SkulltulaTokensIcon from "../../../assets/images/GoldSkulltula.png";

const SkulltulaTokens = (props) => {

    const { counter, increment, decrement } = props;

    const rightClick = (e) => {
        e.preventDefault();
        decrement();
    }

    return (
        <Grid.Column width={2}>
            <Image as="Button" onClick={increment} onContextMenu={rightClick} size="mini" src={SkulltulaTokensIcon} />
            <Header color="red" as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default SkulltulaTokens;