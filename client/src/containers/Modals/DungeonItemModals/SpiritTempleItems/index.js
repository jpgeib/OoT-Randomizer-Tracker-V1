import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/SpiritTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/SpiritTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/SpiritTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/SpiritTemple/Compass";
import SpiritMedallion from "../../../../components/DungeonItems/SpiritTemple/SpiritMedallion";

class SpiritTempleItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const spiritTempleItemsData = JSON.parse(window.localStorage.getItem("spiritTempleItems"));
        this.setState(spiritTempleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("spiritTempleItems", JSON.stringify(this.state));
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
        const { spiritKeysLogic, spiritBossKeyLogic, spiritMedallionLogic } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Spirit Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Spirit Temple Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                spiritKeysLogic={spiritKeysLogic}
                            />
                            <BossKey 
                                spiritBossKeyLogic={spiritBossKeyLogic}
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
                            <SpiritMedallion 
                                spiritMedallionLogic={spiritMedallionLogic}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default SpiritTempleItems;