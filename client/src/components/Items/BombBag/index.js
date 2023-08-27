import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import BombBagIcon from "../../../assets/images/first-row/Bomb-Bag-3D.png";
import BigBombBagIcon from "../../../assets/images/first-row/Bomb-Big-Bag-3D.png";
import BiggestBombBagIcon from "../../../assets/images/first-row/Bomb-Biggest-Bag-3D.png";

const BombBag = (props) => {

    const { counter, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <div id="icon-container" style={{ position: "relative" }}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={((counter <= 20 && BombBagIcon) || (counter === 30 && BigBombBagIcon) || (counter === 40 && BiggestBombBagIcon))} 
            />
            <Header style={(counter >= 40) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
            </div>
        </Grid.Column>
    );
}

export default BombBag;