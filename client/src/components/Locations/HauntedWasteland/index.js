import React from "react";
import { List } from "semantic-ui-react";

const HauntedWasteland = () => {
    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Haunted Wasteland Chest</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Wasteland Ruins Skulltula</List.Header>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default HauntedWasteland;