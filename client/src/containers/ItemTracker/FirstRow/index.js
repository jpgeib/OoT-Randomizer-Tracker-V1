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

    const { addDekuSticks, removeDekuSticks } = props.dekuSticks;
    const { addDekuNuts, removeDekuNuts } = props.dekuNuts;
    const { gotKokiriSword, removeKokiriSword } = props.kokiriSword;
    const { hasKokiriSword, dekuStickCounter, dekuNutCounter } = props.state;
    
    return (
        <Grid.Row>
            <DekuSticks counter={dekuStickCounter} add={addDekuSticks} remove={removeDekuSticks} />
            <DekuNuts counter={dekuNutCounter} add={addDekuNuts} remove={removeDekuNuts} />
            <BombBag />
            <FairyBow />
            <FireArrows />
            <DinsFire />
            <KokiriSword hasKokiriSword={hasKokiriSword} gotKokiriSword={gotKokiriSword} removeKokiriSword={removeKokiriSword} />
            <MasterSword />
        </Grid.Row>
    );
}

export default FirstRow;