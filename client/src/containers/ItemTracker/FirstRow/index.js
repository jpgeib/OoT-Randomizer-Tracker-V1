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

    const {
        dekuSticks,
        addDekuSticks,
        removeDekuSticks,
        dekuNuts,
        addDekuNuts,
        removeDekuNuts,
        bombs,
        addBombs,
        removeBombs,
        fairyBow,
        addFairyBow,
        removeFairyBow,
        kokiriSword,
        addKokiriSword,
        removeKokiriSword, 
        fireArrows, 
        addFireArrows, 
        removeFireArrows 
    } = props;
    
    return (
        <Grid.Row>
            <DekuSticks counter={dekuSticks} add={addDekuSticks} remove={removeDekuSticks} />
            <DekuNuts counter={dekuNuts} add={addDekuNuts} remove={removeDekuNuts} />
            <BombBag counter={bombs} add={addBombs} remove={removeBombs} />
            <FairyBow counter={fairyBow} add={addFairyBow} remove={removeFairyBow} />
            <FireArrows fireArrows={fireArrows} add={addFireArrows} remove={removeFireArrows} />
            <DinsFire />
            <KokiriSword kokiriSword={kokiriSword} addKokiriSword={addKokiriSword} removeKokiriSword={removeKokiriSword} />
            <MasterSword />
        </Grid.Row>
    );
}

export default FirstRow;