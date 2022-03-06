import React from "react";
import { Grid } from "semantic-ui-react";
import DekuSticks from "../../../components/Items/DekuSticks";
import DekuNuts from "../../../components/Items/DekuNuts";
import BombBag from "../../../components/Items/BombBag";
import FairyBow from "../../../components/Items/FairyBow";
import FireArrows from "../../../components/Items/FireArrows";
import DinsFire from "../../../components/Items/DinsFire";
import KokiriSword from "../../../components/Items/KokiriSword";
import MasterSword from "../../../components/Items/MasterSword";

const FirstRow = (props) => {

    const { addDekuNuts, removeDekuNuts } = props.dekuNuts;
    const { addBombs, removeBombs } = props.bombs;
    const { addFairyBow, removeFairyBow } = props.fairyBow;
    const { gotKokiriSword, removeKokiriSword } = props.kokiriSword;
    const { hasKokiriSword, dekuNutCounter, bombCounter, fairyBowCounter } = props.state;
    const {
        dekuSticks,
        addDekuSticks,
        removeDekuSticks, 
        fireArrows, 
        addFireArrows, 
        removeFireArrows 
    } = props;
    
    return (
        <Grid.Row>
            <DekuSticks counter={dekuSticks} add={addDekuSticks} remove={removeDekuSticks} />
            <DekuNuts counter={dekuNutCounter} add={addDekuNuts} remove={removeDekuNuts} />
            <BombBag counter={bombCounter} add={addBombs} remove={removeBombs} />
            <FairyBow counter={fairyBowCounter} add={addFairyBow} remove={removeFairyBow} />
            <FireArrows fireArrows={fireArrows} add={addFireArrows} remove={removeFireArrows} />
            <DinsFire />
            <KokiriSword hasKokiriSword={hasKokiriSword} gotKokiriSword={gotKokiriSword} removeKokiriSword={removeKokiriSword} />
            <MasterSword />
        </Grid.Row>
    );
}

export default FirstRow;