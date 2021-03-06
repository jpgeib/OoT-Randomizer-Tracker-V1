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
        const { 
            kokiriEmeraldLogic, goronRubyLogic, zoraSapphireLogic,
            lightMedallionLogic, forestMedallionLogic, fireMedallionLogic,
            waterMedallionLogic, shadowMedallionLogic, spiritMedallionLogic,
            forestBossKeyLogic, fireBossKeyLogic, waterBossKeyLogic,
            shadowBossKeyLogic, spiritBossKeyLogic, ganonBossKeyLogic,
            forestKeysLogic, fireKeysLogic, waterKeysLogic,
            shadowKeysLogic, spiritKeysLogic, wellKeysLogic,
            fortressKeysLogic, trainingKeysLogic, ganonKeysLogic
        } = this.props.dungeonItemLogic;

        return (
            <Grid style={dungeons}>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <DefaultItem lightMedallionLogic={lightMedallionLogic} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <GanonsCastleItems 
                            ganonKeysLogic={ganonKeysLogic} 
                            ganonBossKeyLogic={ganonBossKeyLogic} 
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        <DekuTreeItems kokiriEmeraldLogic={kokiriEmeraldLogic} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <DodongosCavernItems goronRubyLogic={goronRubyLogic} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <JabuJabuItems zoraSapphireLogic={zoraSapphireLogic} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ForestTempleItems 
                            forestKeysLogic={forestKeysLogic} 
                            forestBossKeyLogic={forestBossKeyLogic} 
                            forestMedallionLogic={forestMedallionLogic} 
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        <FireTempleItems 
                            fireKeysLogic={fireKeysLogic} 
                            fireBossKeyLogic={fireBossKeyLogic} 
                            fireMedallionLogic={fireMedallionLogic} 
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <WaterTempleItems 
                            waterKeysLogic={waterKeysLogic} 
                            waterBossKeyLogic={waterBossKeyLogic} 
                            waterMedallionLogic={waterMedallionLogic} 
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <ShadowTempleItems 
                            shadowKeysLogic={shadowKeysLogic} 
                            shadowBossKeyLogic={shadowBossKeyLogic} 
                            shadowMedallionLogic={shadowMedallionLogic} 
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <SpiritTempleItems 
                            spiritKeysLogic={spiritKeysLogic} 
                            spiritBossKeyLogic={spiritBossKeyLogic} 
                            spiritMedallionLogic={spiritMedallionLogic} 
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={4}>
                        <BottomOfTheWellItems wellKeysLogic={wellKeysLogic} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <IceCavernItems />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <GerudoFortressItems fortressKeysLogic={fortressKeysLogic} />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <GerudoTrainingItems trainingKeysLogic={trainingKeysLogic} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default DungeonItemTracker;