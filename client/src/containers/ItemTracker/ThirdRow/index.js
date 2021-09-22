import React from "react";
import { Grid } from "semantic-ui-react";
import HylianShield from "../../../components/Items/HylianShield";
import MirrorShield from "../../../components/Items/MirrorShield";
import Boomerang from "../../../components/Items/Boomerang";
import LensOfTruth from "../../../components/Items/LensOfTruth";
import MagicBeans from "../../../components/Items/MagicBeans";
import MegatonHammer from "../../../components/Items/MegatonHammer";
import LightArrows from "../../../components/Items/LightArrows";
import NayrusLove from "../../../components/Items/NayrusLove";

const ThirdRow = () => {
    return (
        <Grid.Row>
            <HylianShield />
            <MirrorShield />
            <Boomerang />
            <LensOfTruth />
            <MagicBeans />
            <MegatonHammer />
            <LightArrows />
            <NayrusLove />
        </Grid.Row>
    );
}

export default ThirdRow;