import React from "react";
import { Grid } from "semantic-ui-react";
import BigGoronSword from "../../../components/Items/BigGoronSword";
import FairySlingshot from "../../../components/Items/FairySlingshot";
import FairyOcarina from "../../../components/Items/FairyOcarina";
import Bombchus from "../../../components/Items/Bombchus";
import HookShot from "../../../components/Items/HookShot";
import IceArrows from "../../../components/Items/IceArrows";
import FaroresWind from "../../../components/Items/FaroresWind";
import DekuShield from "../../../components/Items/DekuShield";

const SecondRow = () => {
    return (
        <Grid.Row>
            <BigGoronSword />
            <FairySlingshot />
            <FairyOcarina />
            <Bombchus />
            <HookShot />
            <IceArrows />
            <FaroresWind />
            <DekuShield />
        </Grid.Row>
    );
}

export default SecondRow;