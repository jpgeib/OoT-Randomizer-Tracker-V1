import React from "react";
import { List } from "semantic-ui-react";

const KokiriForest = (props) => {

    const { 
        hasKokiriTunic, 
        kokiriSwordChest, 
        midoChest1, 
        midoChest2, 
        midoChest3, 
        midoChest4, 
        sariasOcarina 
    } = props;
    const { 
        gotKokiriSwordChest, 
        gotMidoChest1, 
        gotMidoChest2, 
        gotMidoChest3, 
        gotMidoChest4, 
        gotSariasOcarina 
    } = props.kokiriForestLogic;

    return (
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
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Saria's Ocarina</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kokiri Storms Grotto</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header>Kokiri Storms Grotto Chest</List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kokiri Know It All House Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kokiri House of Twins Skulltula</List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header>Kokiri Bean Patch Skulltula</List.Header>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default KokiriForest;