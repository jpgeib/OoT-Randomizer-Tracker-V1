import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/WaterTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/WaterTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/WaterTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/WaterTemple/Compass";
import WaterMedallion from "../../../../components/DungeonItems/WaterTemple/WaterMedallion";

class WaterTempleItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const waterTempleItemsData = JSON.parse(window.localStorage.getItem("waterTempleItems"));
        this.setState(waterTempleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("waterTempleItems", JSON.stringify(this.state));
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
                trigger={<Button fluid content="Water Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Water Temple Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                counter={state.waterKeys}
                                addWaterKey={smallKeys.addWaterKey}
                                removeWaterKey={smallKeys.removeWaterKey}
                            />
                            <BossKey 
                                hasWaterBossKey={state.hasWaterBossKey}
                                addWaterBossKey={bossKeys.addWaterBossKey}
                                removeWaterBossKey={bossKeys.removeWaterBossKey}
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
                            <WaterMedallion 
                                hasWaterMedallion={state.hasWaterMedallion}
                                addWaterMedallion={medallions.addWaterMedallion}
                                removeWaterMedallion={medallions.removeWaterMedallion}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default WaterTempleItems;