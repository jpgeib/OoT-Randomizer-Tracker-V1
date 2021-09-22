import React from "react";
import { List } from "semantic-ui-react";

const TempleOfTime = () => {
    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Temple of Time</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Prelude of Light</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Light Arrows</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
        </List>
    );
}

export default TempleOfTime;