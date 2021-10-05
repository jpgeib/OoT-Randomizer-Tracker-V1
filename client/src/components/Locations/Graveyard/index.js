import React from "react";
import { List } from "semantic-ui-react";

const Graveyard = (props) => {

    const { hasKokiriTunic, hasLongshot, obtainedItem } = props;
    const { obtainItem, unobtainItem } = props.items;
    
    const beanAvailable = (hasLongshot === true && obtainedItem === false);
    const beanUnavailable = (hasLongshot === false && obtainedItem === false);
    const defaultGraveyard = (hasKokiriTunic === true && obtainedItem === false);

    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(defaultGraveyard && {color: "green"}) || {color: "gray"}}
                        onClick={obtainItem}
                        onContextMenu={unobtainItem}
                    >
                        Dampe Digging
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Dampe's Grave</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(defaultGraveyard && {color: "green"}) || {color: "gray"}}
                                onClick={obtainItem}
                                onContextMenu={unobtainItem}
                            >
                                Dampe Race 1
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(defaultGraveyard && {color: "green"}) || {color: "gray"}}
                                onClick={obtainItem}
                                onContextMenu={unobtainItem}
                            >
                                Dampe Race 2
                            </List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Shield Grave</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(defaultGraveyard && {color: "green"}) || {color: "gray"}}
                                onClick={obtainItem}
                                onContextMenu={unobtainItem}
                            >
                                Shield Grave Chest
                            </List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Redead Grave</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Redead Grave Chest</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Royal Grave</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Sun's Song</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Sun's Song Chest</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item >
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header 
                        style={(beanAvailable && {color: "green"}) || (beanUnavailable && { color: "red" }) || {color: "gray"}}
                        onClick={obtainItem}
                        onContextMenu={unobtainItem}
                    >
                        Magic Bean Heart Piece
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Graveyard Wall Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Graveyard Bean Patch Skulltula</List.Header>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default Graveyard;