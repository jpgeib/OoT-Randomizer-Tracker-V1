import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import BottomOfTheWellModal from "../Modals/LocationModals/BottomOfTheWellModal";
import CastleGroundsModal from "../Modals/LocationModals/CastleGroundsModal";
import CastleTownModal from "../Modals/LocationModals/CastleTownModal";
import DeathMountainCraterModal from "../Modals/LocationModals/DeathMountainCraterModal";
import DeathMountainModal from "../Modals/LocationModals/DeathMountainModal";
import DesertColossusModal from "../Modals/LocationModals/DesertColossusModal";
import DodongosCavernModal from "../Modals/LocationModals/DodongosCavernModal";
import FireTempleModal from "../Modals/LocationModals/FireTempleModal";
import ForestTempleModal from "../Modals/LocationModals/ForestTempleModal";
import GanonsCastleModal from "../Modals/LocationModals/GanonsCastleModal";
import GerudoFortressModal from "../Modals/LocationModals/GerudoFortressModal";
import GerudoTrainingModal from "../Modals/LocationModals/GerudoTrainingModal";
import GerudoValleyModal from "../Modals/LocationModals/GerudoValleyModal";
import GoronCityModal from "../Modals/LocationModals/GoronCityModal";
import GraveyardModal from "../Modals/LocationModals/GraveyardModal";
import GreatDekuTreeModal from "../Modals/LocationModals/GreatDekuTreeModal";
import HauntedWastelandModal from "../Modals/LocationModals/HauntedWastelandModal";
import HyruleFieldModal from "../Modals/LocationModals/HyruleFieldModal";
import IceCavernModal from "../Modals/LocationModals/IceCavernModal";
import JabuJabusBellyModal from "../Modals/LocationModals/JabuJabusBellyModal";
import KakarikoVillageModal from "../Modals/LocationModals/KakarikoVillageModal";
import KokiriForestModal from "../Modals/LocationModals/KokiriForestModal";
import LakeHyliaModal from "../Modals/LocationModals/LakeHyliaModal";
import LonLonRanchModal from "../Modals/LocationModals/LonLonRanchModal";
import LostWoodsModal from "../Modals/LocationModals/LostWoodsModal";
import SacredMeadowModal from "../Modals/LocationModals/SacredMeadowModal";
import ShadowTempleModal from "../Modals/LocationModals/ShadowTempleModal";
import SpiritTempleModal from "../Modals/LocationModals/SpiritTempleModal";
import TempleOfTimeModal from "../Modals/LocationModals/TempleOfTimeModal";
import WaterTempleModal from "../Modals/LocationModals/WaterTempleModal";
import ZoraFountainModal from "../Modals/LocationModals/ZoraFountainModal";
import ZoraRiverModal from "../Modals/LocationModals/ZoraRiverModal";
import ZorasDomainModal from "../Modals/LocationModals/ZorasDomainModal";

class LocationList extends Component {
    render() {

        const { locations, state, items } = this.props;

        return (
            <Grid style={locations}>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <List relaxed >
                            <List.Item>
                                <KokiriForestModal />
                            </List.Item>
                            <List.Item>
                                <LostWoodsModal />
                            </List.Item>
                            <List.Item>
                                <GreatDekuTreeModal />
                            </List.Item>
                            <List.Item>
                                <SacredMeadowModal />
                            </List.Item>
                            <List.Item>
                                <ForestTempleModal />
                            </List.Item>
                            <List.Item>
                                <HyruleFieldModal />
                            </List.Item>
                            <List.Item>
                                <LonLonRanchModal />
                            </List.Item>
                            <List.Item>
                                <CastleTownModal />
                            </List.Item>
                            <List.Item>
                                <TempleOfTimeModal />
                            </List.Item>
                            <List.Item>
                                <CastleGroundsModal />
                            </List.Item>
                            <List.Item>
                                <KakarikoVillageModal state={state} items={items} />
                            </List.Item>
                            <List.Item>
                                <BottomOfTheWellModal />
                            </List.Item>
                            <List.Item>
                                <GraveyardModal state={state} items={items} />
                            </List.Item>
                            <List.Item>
                                <ShadowTempleModal />
                            </List.Item>
                            <List.Item>
                                <DeathMountainModal />
                            </List.Item>
                            <List.Item>
                                <GoronCityModal />
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <List relaxed>
                            <List.Item>
                                <DeathMountainCraterModal />
                            </List.Item>
                            <List.Item>
                                <DodongosCavernModal />
                            </List.Item>
                            <List.Item>
                                <FireTempleModal />
                            </List.Item>
                            <List.Item>
                                <ZoraRiverModal />
                            </List.Item>
                            <List.Item>
                                <ZorasDomainModal />
                            </List.Item>
                            <List.Item>
                                <ZoraFountainModal />
                            </List.Item>
                            <List.Item>
                                <JabuJabusBellyModal />
                            </List.Item>
                            <List.Item>
                                <IceCavernModal />
                            </List.Item>
                            <List.Item>
                                <LakeHyliaModal />
                            </List.Item>
                            <List.Item>
                                <WaterTempleModal />
                            </List.Item>
                            <List.Item>
                                <GerudoValleyModal />
                            </List.Item>
                            <List.Item>
                                <GerudoFortressModal />
                            </List.Item>
                            <List.Item>
                                <GerudoTrainingModal />
                            </List.Item>
                            <List.Item>
                                <HauntedWastelandModal />
                            </List.Item>
                            <List.Item>
                                <DesertColossusModal />
                            </List.Item>
                            <List.Item>
                                <SpiritTempleModal />
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={7}>
                        <List relaxed>
                            <List.Item>
                                <GanonsCastleModal />
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default LocationList;