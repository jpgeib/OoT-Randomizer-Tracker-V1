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

    const kokiriSwordChestAvailable = (hasKokiriTunic === true && kokiriSwordChest === false);
    const midoChest1Available = (hasKokiriTunic === true && midoChest1 === false);
    const midoChest2Available = (hasKokiriTunic === true && midoChest2 === false);
    const midoChest3Available = (hasKokiriTunic === true && midoChest3 === false);
    const midoChest4Available = (hasKokiriTunic === true && midoChest4 === false);
    const sariasOcarinaAvailable = (hasKokiriTunic === true && sariasOcarina === false);

    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(kokiriSwordChestAvailable && {color: "green"}) || {color: "gray"}}
                        onClick={gotKokiriSwordChest}
                    >
                        Kokiri's Sword Chest
                    </List.Header>
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
                    <List.Header
                        style={(midoChest1 === true && midoChest2 === true && midoChest3 === true && midoChest4 === true) ? {color: "gray"} : {color: "green"}}
                    >
                        Mido's House
                    </List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(midoChest1Available && {color: "green"}) || {color: "gray"}}
                                onClick={gotMidoChest1}
                            >
                                Mido's House Chest 1
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(midoChest2Available && {color: "green"}) || {color: "gray"}}
                                onClick={gotMidoChest2}
                            >
                                Mido's House Chest 2
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(midoChest3Available && {color: "green"}) || {color: "gray"}}
                                onClick={gotMidoChest3}
                            >
                                Mido's House Chest 3
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(midoChest4Available && {color: "green"}) || {color: "gray"}}
                                onClick={gotMidoChest4}
                            >
                                Mido's House Chest 4
                            </List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(sariasOcarinaAvailable && {color: "green"}) || {color: "gray"}}
                        onClick={gotSariasOcarina}
                    >
                        Saria's Ocarina
                    </List.Header>
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