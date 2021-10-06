import React from "react";
import { List } from "semantic-ui-react";

const Graveyard = (props) => {

    const { hasKokiriTunic, hasMasterSword, hasLongshot, dampeDigging, dampeRace1, dampeRace2, shieldGrave, beanHeartPiece } = props;
    const { gotDampeDigging, gotDampeRace1, gotDampeRace2, gotShieldGrave, gotBeanHeartPiece } = props.graveyardLogic;
    
    const beanHeartPieceAvailable = (hasLongshot === true && beanHeartPiece === false);
    const beanHeartPieceUnavailable = (hasLongshot === false && beanHeartPiece === false);
    const dampeDiggingAvailable = (hasKokiriTunic === true && dampeDigging === false);
    const dampeRace1Available = (hasMasterSword === true && dampeRace1 === false);
    const dampeRace2Available = (hasMasterSword === true && dampeRace2 === false);
    const shieldGraveAvailable = (hasKokiriTunic === true && shieldGrave === false);

    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(dampeDiggingAvailable && {color: "green"}) || {color: "grey"}}
                        onClick={gotDampeDigging}
                    >
                        Dampe Digging
                    </List.Header>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name="check" size="large" verticalAlign="middle" />
                <List.Content>
                    <List.Header
                        style={(dampeRace1 === true && dampeRace2 === true) ? {color: "grey"} : {color: "green"}}
                    >Dampe's Grave</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(dampeRace1Available && {color: "green"}) || {color: "grey"}}
                                onClick={gotDampeRace1}
                            >
                                Dampe Race 1
                            </List.Header>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(dampeRace2Available && {color: "green"}) || {color: "grey"}}
                                onClick={gotDampeRace2}
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
                    <List.Header style={(shieldGrave === true) ? {color: "grey"} : { color: "green" }} >Shield Grave</List.Header>
                </List.Content>
                <List.List>
                    <List.Item>
                        <List.Icon name="check" size="small" verticalAlign="middle" />
                        <List.Content>
                            <List.Header
                                style={(shieldGraveAvailable && {color: "green"}) || {color: "grey"}}
                                onClick={gotShieldGrave}
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
                        style={(beanHeartPieceAvailable && {color: "green"}) || (beanHeartPieceUnavailable && { color: "red" }) || {color: "grey"}}
                        onClick={gotBeanHeartPiece}
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