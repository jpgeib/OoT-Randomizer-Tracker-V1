import React from "react";
import { List } from "semantic-ui-react";

const GreatDekuTree = (props) => {

    const { hasKokiriTunic, lobbyChest, compassChest, compassSideChest } = props;
    const { gotLobbyChest, gotCompassChest, gotCompassSideChest } = props.dekuTreeLogic;

    const lobbyChestAvailable = (hasKokiriTunic === true && lobbyChest === false);
    const compassChestAvailable = (hasKokiriTunic === true && compassChest === false);
    const compassSideChestAvailable = (hasKokiriTunic === true && compassSideChest === false);
    
    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(lobbyChestAvailable && {color: "green"}) || {color: "grey"}}
                        onClick={gotLobbyChest}
                    >
                        Lobby Chest
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Slingshot Chest</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Slingshot Room Side Chest</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(compassChestAvailable && {color: "green"}) || {color: "grey"}}
                        onClick={gotCompassChest}
                    >
                        Compass Chest
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(compassSideChestAvailable && {color: "green"}) || {color: "grey"}}
                        onClick={gotCompassSideChest}
                    >
                        Compass Room Side Chest
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Basement Chest</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Gohma</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Deku Tree Compass Room Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Deku Tree Basement Vines Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Deku Tree Basement Gate Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Deku Tree Basement Back Room Skulltula</List.Header>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default GreatDekuTree;