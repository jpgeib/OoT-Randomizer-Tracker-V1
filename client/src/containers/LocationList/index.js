import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import GreatDekuTreeModal from "../Modals/LocationModals/GreatDekuTreeModal";
import KokiriForestModal from "../Modals/LocationModals/KokiriForestModal";
import LostWoodsModal from "../Modals/LocationModals/LostWoodsModal";

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
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Sacred Forest Meadow</List.Header>
                                    <List.Description>Available Items: 5</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Forest Temple</List.Header>
                                    <List.Description>Available Items: 19</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Hyrule Field</List.Header>
                                    <List.Description>Available Items: 9</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Lon Lon Ranch</List.Header>
                                    <List.Description>Available Items: 9</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Castle Town</List.Header>
                                    <List.Description>Available Items: 7</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Temple of Time</List.Header>
                                    <List.Description>Available Items: 3</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Castle Grounds</List.Header>
                                    <List.Description>Available Items: 7</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Kakariko Village</List.Header>
                                    <List.Description>Available Items: 22</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Bottom of the Well</List.Header>
                                    <List.Description>Available Items: 17</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Graveyard</List.Header>
                                    <List.Description>Available Items: 10</List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="large" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Shadow Temple</List.Header>
                                    <List.Description>Available Items: 23</List.Description>
                                </List.Content>
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