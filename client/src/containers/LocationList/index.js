import React, { Component } from "react";
import { List } from "semantic-ui-react";

class LocationList extends Component {
    render() {

        const { locations } = this.props;

        return (
            <List divided relaxed style={locations}>
                <List.Item>
                    <List.Icon name="check" size="small" verticalAlign="middle" />
                    <List.Content>
                        <List.Header>Kokiri Forest</List.Header>
                        <List.Description>Available Items: 9</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="check" size="small" verticalAlign="middle" />
                    <List.Content>
                        <List.Header>Lost Woods</List.Header>
                        <List.Description>Available Items: 11</List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name="check" size="small" verticalAlign="middle" />
                    <List.Content>
                        <List.Header>Great Deku Tree</List.Header>
                        <List.Description>Available Items: 11</List.Description>
                    </List.Content>
                </List.Item>
            </List>
        );
    }
}

export default LocationList;