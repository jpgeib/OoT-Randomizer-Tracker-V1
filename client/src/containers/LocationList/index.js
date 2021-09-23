import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import BottomOfTheWellModal from "../Modals/LocationModals/BottomOfTheWellModal";
import CastleGroundsModal from "../Modals/LocationModals/CastleGroundsModal";
import CastleTownModal from "../Modals/LocationModals/CastleTownModal";
import ForestTempleModal from "../Modals/LocationModals/ForestTempleModal";
import GraveyardModal from "../Modals/LocationModals/GraveyardModal";
import GreatDekuTreeModal from "../Modals/LocationModals/GreatDekuTreeModal";
import HyruleFieldModal from "../Modals/LocationModals/HyruleFieldModal";
import KakarikoVillageModal from "../Modals/LocationModals/KakarikoVillageModal";
import KokiriForestModal from "../Modals/LocationModals/KokiriForestModal";
import LonLonRanchModal from "../Modals/LocationModals/LonLonRanchModal";
import LostWoodsModal from "../Modals/LocationModals/LostWoodsModal";
import SacredMeadowModal from "../Modals/LocationModals/SacredMeadowModal";
import ShadowTempleModal from "../Modals/LocationModals/ShadowTempleModal";
import TempleOfTimeModal from "../Modals/LocationModals/TempleOfTimeModal";

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
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Death Mountain</List.Header>
                                    <List.Description>Available Items: 10</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Goron City</List.Header>
                                    <List.Description>Available Items: 10</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <List relaxed>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Death Mountain Crater</List.Header>
                                    <List.Description>Available Items: 8</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Dodongo's Cavern</List.Header>
                                    <List.Description>Available Items: 12</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Fire Temple</List.Header>
                                    <List.Description>Available Items: 20</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Zora River</List.Header>
                                    <List.Description>Available Items: 10</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Zora's Domain</List.Header>
                                    <List.Description>Available Items: 4</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Zora Fountain</List.Header>
                                    <List.Description>Available Items: 6</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Jabu Jabu's Belly</List.Header>
                                    <List.Description>Available Items: 8</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Ice Cavern</List.Header>
                                    <List.Description>Available Items: 8</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Lake Hylia</List.Header>
                                    <List.Description>Available Items: 12</List.Description>
                                </List.Content>
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