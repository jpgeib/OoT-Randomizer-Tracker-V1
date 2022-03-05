import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import BombBagIcon from "../../../assets/images/BombBag.png";
import BigBombBagIcon from "../../../assets/images/Big_Bomb_Bag.png";
import BiggestBombBagIcon from "../../../assets/images/BiggestBombBag.png";

const BombBag = (props) => {

    const { counter, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={((counter <= 20 && BombBagIcon) || (counter === 30 && BigBombBagIcon) || (counter === 40 && BiggestBombBagIcon))} 
            />
            <Header style={(counter >= 40) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default BombBag;