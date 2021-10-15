import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/ShadowTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/ShadowTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/ShadowTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/ShadowTemple/Compass";
import ShadowMedallion from "../../../../components/DungeonItems/ShadowTemple/ShadowMedallion";

class ShadowTempleItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const shadowTempleItemsData = JSON.parse(window.localStorage.getItem("shadowTempleItems"));
        this.setState(shadowTempleItemsData);
        console.log(shadowTempleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("shadowTempleItems", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    gotDungeonMap = (e) => {
        this.setState({ hasDungeonMap: true });
    }

    removeDungeonMap = (e) => {
        e.preventDefault();
        this.setState({ hasDungeonMap: false });
    }

    gotCompass = (e) => {
        this.setState({ hasCompass: true });
    }

    removeCompass = (e) => {
        e.preventDefault();
        this.setState({ hasCompass: false });
    }

    render() {

        const { open } = this.state;
        const { state, smallKeys, bossKeys, medallions } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Shadow Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Shadow Temple Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                counter={state.shadowKeys}
                                addShadowKey={smallKeys.addShadowKey}
                                removeShadowKey={smallKeys.removeShadowKey}
                            />
                            <BossKey 
                                hasShadowBossKey={state.hasShadowBossKey}
                                addShadowBossKey={bossKeys.addShadowBossKey}
                                removeShadowBossKey={bossKeys.removeShadowBossKey}
                            />
                            <DungeonMap 
                                hasDungeonMap={this.state.hasDungeonMap}
                                gotDungeonMap={this.gotDungeonMap}
                                removeDungeonMap={this.removeDungeonMap}
                            />
                            <Compass 
                                hasCompass={this.state.hasCompass}
                                gotCompass={this.gotCompass}
                                removeCompass={this.removeCompass}
                            />
                            <ShadowMedallion 
                                hasShadowMedallion={state.hasShadowMedallion}
                                addShadowMedallion={medallions.addShadowMedallion}
                                removeShadowMedallion={medallions.removeShadowMedallion}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default ShadowTempleItems;