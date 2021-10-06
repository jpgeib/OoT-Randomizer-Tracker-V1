import React from "react";
import { List } from "semantic-ui-react";

const KakarikoVillage = (props) => {

    const { skulltulaCounter, obtainedItem } = props;

    const skulltulaHouseAvailable = {
        ten: (skulltulaCounter >= 10 && obtainedItem === false),
        twenty: (skulltulaCounter >= 20 && obtainedItem === false),
        thirty: (skulltulaCounter >= 30 && obtainedItem === false),
        forty: (skulltulaCounter >= 40 && obtainedItem === false),
        fifty: (skulltulaCounter >= 50 && obtainedItem === false)
    };

    const skulltulaHouseUnavailable = {
        ten: (skulltulaCounter < 10 && obtainedItem === false),
        twenty: (skulltulaCounter < 20 && obtainedItem === false),
        thirty: (skulltulaCounter < 30 && obtainedItem === false),
        forty: (skulltulaCounter < 40 && obtainedItem === false),
        fifty: (skulltulaCounter < 50 && obtainedItem === false)
    };

    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Anju as Adult</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Anju's Chickens</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Redead Grotto</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Kakariko Redead Grotto Chest</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Open Grotto</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Kakariko Grotto Chest</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Windmill</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Windmill Heart Piece</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Song of Storms</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Man on Roof</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Impa's House</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Impa's House Back</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Cow Heart Piece</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Nocturne of Shadow</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Skulltula House</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(skulltulaHouseAvailable.ten && {color: "green"}) || (skulltulaHouseUnavailable.ten && { color: "red" }) || {color: "grey"}}
                            >Skulltula House 10 Tokens</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Skulltula House 20 Tokens</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Skulltula House 30 Tokens</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Skulltula House 40 Tokens</List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Skulltula House 50 Tokens</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Adult Shooting Gallery</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Adult Shooting Gallery</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Tree Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Skulltula House Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko House Under Construction Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Guard's House Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Watchtower Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kakariko Above Impa's House Skulltula</List.Header>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default KakarikoVillage;