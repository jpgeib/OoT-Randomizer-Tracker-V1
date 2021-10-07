import React from "react";
import { List } from "semantic-ui-react";

const KokiriForest = (props) => {

    const { 
        hasKokiriTunic,
        hasOcarina,
        hasSongOfStorms,
        hasKokiriSword,
        emptyBottles,
        hasHookshot, 
        kokiriSwordChest, 
        midoChest1, 
        midoChest2, 
        midoChest3, 
        midoChest4, 
        sariasOcarina,
        kokiriStormsGrotto,
        knowItAllSkulltula,
        twinsSkulltula,
        beanSkulltula 
    } = props;

    const { 
        gotKokiriSwordChest, 
        gotMidoChest1, 
        gotMidoChest2, 
        gotMidoChest3, 
        gotMidoChest4, 
        gotSariasOcarina,
        gotKokiriStormsGrotto,
        gotKnowItAllSkulltula,
        gotTwinsSkulltula,
        gotBeanSkulltula 
    } = props.kokiriForestLogic;

    const kokiriSwordChestAvailable = (hasKokiriTunic === true && kokiriSwordChest === false);
    const midoChest1Available = (hasKokiriTunic === true && midoChest1 === false);
    const midoChest2Available = (hasKokiriTunic === true && midoChest2 === false);
    const midoChest3Available = (hasKokiriTunic === true && midoChest3 === false);
    const midoChest4Available = (hasKokiriTunic === true && midoChest4 === false);
    const sariasOcarinaAvailable = (hasKokiriTunic === true && sariasOcarina === false);
    const kokiriStormsGrottoAvailable = ((hasOcarina && hasSongOfStorms) === true && kokiriStormsGrotto === false);
    const kokiriStormsGrottoUnavailable = ((hasOcarina && hasSongOfStorms) === false && kokiriStormsGrotto === false);
    const knowItAllSkulltulaAvailable = (hasKokiriSword === true && knowItAllSkulltula === false);
    const knowItAllSkulltulaUnavailable = (hasKokiriSword === false && knowItAllSkulltula === false);
    const twinsSkulltulaAvailable = ((hasHookshot === true) && twinsSkulltula === false);
    const twinsSkulltulaUnavailable = ((hasHookshot === false) && twinsSkulltula === false);
    const beanSkulltulaAvailable = ((hasKokiriSword === true) && emptyBottles > 0 && beanSkulltula === false);
    const beanSkulltulaUnavailable = ((hasKokiriSword === false) && emptyBottles < 1 && beanSkulltula === false);

    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(kokiriSwordChestAvailable && {color: "green"}) || {color: "grey"}}
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
                        style={(midoChest1 === true && midoChest2 === true && midoChest3 === true && midoChest4 === true) ? {color: "grey"} : {color: "green"}}
                    >
                        Mido's House
                    </List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(midoChest1Available && {color: "green"}) || {color: "grey"}}
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
                                style={(midoChest2Available && {color: "green"}) || {color: "grey"}}
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
                                style={(midoChest3Available && {color: "green"}) || {color: "grey"}}
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
                                style={(midoChest4Available && {color: "green"}) || {color: "grey"}}
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
                        style={(sariasOcarinaAvailable && {color: "green"}) || {color: "grey"}}
                        onClick={gotSariasOcarina}
                    >
                        Saria's Ocarina
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(kokiriStormsGrottoAvailable && {color: "green"}) || (kokiriStormsGrottoUnavailable && {color: "red"}) || {color: "grey"}}
                    >
                        Kokiri Storms Grotto
                    </List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(kokiriStormsGrottoAvailable && {color: "green"}) || (kokiriStormsGrottoUnavailable && {color: "red"}) || {color: "grey"}}
                                onClick={gotKokiriStormsGrotto}
                            >
                                Kokiri Storms Grotto Chest
                            </List.Header>
                        </List.Content>
                    </List.Item>
                </List.List>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(knowItAllSkulltulaAvailable && {color: "green"}) || (knowItAllSkulltulaUnavailable && {color: "red"}) || {color: "grey"}}
                        onClick={gotKnowItAllSkulltula}
                    >
                        Kokiri Know It All House Skulltula
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(twinsSkulltulaAvailable && {color: "green"}) || (twinsSkulltulaUnavailable && {color: "red"}) || {color: "grey"}}
                        onClick={gotTwinsSkulltula}
                    >
                        Kokiri House of Twins Skulltula
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(beanSkulltulaAvailable && {color: "green"}) || (beanSkulltula === true) && {color: "grey"} || {color: "red"}}
                        onClick={gotBeanSkulltula}
                    >
                        Kokiri Bean Patch Skulltula
                    </List.Header>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default KokiriForest;