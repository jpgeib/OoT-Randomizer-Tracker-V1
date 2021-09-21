import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import DefaultItem from "../Modals/DungeonItemModals/DefaultItem";
import DekuTreeItems from "../Modals/DungeonItemModals/DekuTreeItems";
import DodongosCavernItems from "../Modals/DungeonItemModals/DodongosCavernItems";
import JabuJabuItems from "../Modals/DungeonItemModals/JabuJabuItems";
import ForestTempleItems from "../Modals/DungeonItemModals/ForestTempleItems";
import FireTempleItems from "../Modals/DungeonItemModals/FireTempleItems";
import WaterTempleItems from "../Modals/DungeonItemModals/WaterTempleItems";
import ShadowTempleItems from "../Modals/DungeonItemModals/ShadowTempleItems";
import SpiritTempleItems from "../Modals/DungeonItemModals/SpiritTempleItems";
import BottomOfTheWellItems from "../Modals/DungeonItemModals/BottomOfTheWellItems";
import IceCavernItems from "../Modals/DungeonItemModals/IceCavernItems";
import GerudoFortressItems from "../Modals/DungeonItemModals/GerudoFortressItems";
import GerudoTrainingItems from "../Modals/DungeonItemModals/GerudoTrainingItems";
import GanonsCastleItems from "../Modals/DungeonItemModals/GanonsCastleItems";



class DungeonItemTracker extends Component {
    render() {

        const { dungeons } = this.props;

        return (
            <Grid style={dungeons}>
                <Grid.Row centered>
                    <Grid.Column width={2}>
                        <DefaultItem />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <DekuTreeItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <DodongosCavernItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <JabuJabuItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <ForestTempleItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <FireTempleItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <WaterTempleItems />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={2}>
                        <ShadowTempleItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <SpiritTempleItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <BottomOfTheWellItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <IceCavernItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <GerudoFortressItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <GerudoTrainingItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <GanonsCastleItems />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default DungeonItemTracker;