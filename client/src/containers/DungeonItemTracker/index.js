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

        const { dungeons, smallKeys, state } = this.props;

        return (
            <Grid style={dungeons}>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <DefaultItem />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <GanonsCastleItems />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        <DekuTreeItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <DodongosCavernItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <JabuJabuItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ForestTempleItems state={state} smallKeys={smallKeys} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        <FireTempleItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <WaterTempleItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ShadowTempleItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <SpiritTempleItems />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        <BottomOfTheWellItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <IceCavernItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <GerudoFortressItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <GerudoTrainingItems />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default DungeonItemTracker;