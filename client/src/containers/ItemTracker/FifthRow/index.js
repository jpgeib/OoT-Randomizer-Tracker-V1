import React from "react";
import { Grid } from "semantic-ui-react";
import KokiriBoots from "../../../components/Items/KokiriBoots";
import IronBoots from "../../../components/Items/IronBoots";
import HoverBoots from "../../../components/Items/HoverBoots";
import ZoraScale from "../../../components/Items/ZoraScale";
import MagicMeter from "../../../components/Items/MagicMeter";
import GoronBracelet from "../../../components/Items/GoronBracelet";
import GerudoCard from "../../../components/Items/GerudoCard";
import StoneOfAgony from "../../../components/Items/StoneOfAgony";

const FifthRow = () => {
    return (
        <Grid.Row>
            <KokiriBoots />
            <IronBoots />
            <HoverBoots />
            <ZoraScale />
            <MagicMeter />
            <GoronBracelet />
            <GerudoCard />
            <StoneOfAgony />
        </Grid.Row>
    );
}

export default FifthRow;