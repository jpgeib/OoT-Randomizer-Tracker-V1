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

    const { dekuSticks, addDekuSticks, removeDekuSticks } = props.firstRowLogic.dekuSticksLogic;
    const { dekuNuts, addDekuNuts, removeDekuNuts } = props.firstRowLogic.dekuNutsLogic;
    const { bombs, addBombs, removeBombs } = props.firstRowLogic.bombsLogic;
    const { fairyBow, addFairyBow, removeFairyBow } = props.firstRowLogic.fairyBowLogic;
    const { fireArrows, addFireArrows, removeFireArrows } = props.firstRowLogic.fireArrowLogic;
    const { dinsFire, addDinsFire, removeDinsFire } = props.firstRowLogic.dinsFireLogic;
    const { kokiriSword, addKokiriSword, removeKokiriSword } = props.firstRowLogic.kokiriSwordLogic;
    
    return (
        <Grid.Row>
            <DekuSticks counter={dekuSticks} counterStyle={props.counterStyle} add={addDekuSticks} remove={removeDekuSticks} />
            <DekuNuts counter={dekuNuts} counterStyle={props.counterStyle} add={addDekuNuts} remove={removeDekuNuts} />
            <BombBag counter={bombs} counterStyle={props.counterStyle} add={addBombs} remove={removeBombs} />
            <FairyBow counter={fairyBow} counterStyle={props.counterStyle} add={addFairyBow} remove={removeFairyBow} />
            <FireArrows fireArrows={fireArrows} add={addFireArrows} remove={removeFireArrows} />
            <DinsFire dinsFire={dinsFire} add={addDinsFire} remove={removeDinsFire} />
            <KokiriSword kokiriSword={kokiriSword} addKokiriSword={addKokiriSword} removeKokiriSword={removeKokiriSword} />
            <MasterSword />
        </Grid.Row>
    );
}

export default FirstRow;