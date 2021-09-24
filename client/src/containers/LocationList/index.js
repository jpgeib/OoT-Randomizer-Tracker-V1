import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import BottomOfTheWellModal from "../Modals/LocationModals/BottomOfTheWellModal";
import CastleGroundsModal from "../Modals/LocationModals/CastleGroundsModal";
import CastleTownModal from "../Modals/LocationModals/CastleTownModal";
import DeathMountainCraterModal from "../Modals/LocationModals/DeathMountainCraterModal";
import DeathMountainModal from "../Modals/LocationModals/DeathMountainModal";
import DodongosCavernModal from "../Modals/LocationModals/DodongosCavernModal";
import FireTempleModal from "../Modals/LocationModals/FireTempleModal";
import ForestTempleModal from "../Modals/LocationModals/ForestTempleModal";
import GoronCityModal from "../Modals/LocationModals/GoronCityModal";
import GraveyardModal from "../Modals/LocationModals/GraveyardModal";
import GreatDekuTreeModal from "../Modals/LocationModals/GreatDekuTreeModal";
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
import TempleOfTimeModal from "../Modals/LocationModals/TempleOfTimeModal";
import ZoraFountainModal from "../Modals/LocationModals/ZoraFountainModal";
import ZoraRiverModal from "../Modals/LocationModals/ZoraRiverModal";
import ZorasDomainModal from "../Modals/LocationModals/ZorasDomainModal";

class LocationList extends Component {
    render() {

        const { locations } = this.props;

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
                                <KakarikoVillageModal />
                            </List.Item>
                            <List.Item>
                                <BottomOfTheWellModal />
                            </List.Item>
                            <List.Item>
                                <GraveyardModal />
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
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Water Temple</List.Header>
                                    <List.Description>Available Items: 16</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Gerudo Valley</List.Header>
                                    <List.Description>Available Items: 8</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Gerudo Fortress</List.Header>
                                    <List.Description>Available Items: 10</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Gerudo Training Grounds</List.Header>
                                    <List.Description>Available Items: 22</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Haunted Wasteland</List.Header>
                                    <List.Description>Available Items: 2</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Desert Colossus</List.Header>
                                    <List.Description>Available Items: 7</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Spirit Temple</List.Header>
                                    <List.Description>Available Items: 25</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={7}>
                        <List relaxed>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Ganon's Castle</List.Header>
                                    <List.Description>Available Items: 17</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default LocationList;