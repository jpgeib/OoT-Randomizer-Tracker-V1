import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";

class LocationItems extends Component {
    render() {

        const { items } = this.props;

        return (
            <Grid style={items}>
                <List divided relaxed>
                    <List.Item>
                        <List.Icon name="check" size="large" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Kokiri's Sword Chest</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="large" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Link's House</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="large" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Mido's House</List.Header>
                        </List.Content>
                        <List.List>
                            <List.Item>
                                <List.Icon name="check" size="small" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Mido's House Chest 1</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="small" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Mido's House Chest 2</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="small" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Mido's House Chest 3</List.Header>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name="check" size="small" verticalAlign="middle" />
                                <List.Content>
                                    <List.Header>Mido's House Chest 4</List.Header>
                                </List.Content>
                            </List.Item>
                        </List.List>
                    </List.Item>
                </List>
            </Grid>
        );
    }
}

export default LocationItems;