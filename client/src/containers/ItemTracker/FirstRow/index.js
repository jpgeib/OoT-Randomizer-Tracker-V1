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

const FirstRow = () => {
    return (
        <Grid.Row>
            <DekuSticks />
            <DekuNuts />
            <BombBag />
            <FairyBow />
            <FireArrows />
            <DinsFire />
            <KokiriSword />
            <MasterSword />
        </Grid.Row>
    );
}

export default FirstRow;