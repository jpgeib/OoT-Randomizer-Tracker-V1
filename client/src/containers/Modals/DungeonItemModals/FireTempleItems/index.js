import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/FireTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/FireTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/FireTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/FireTemple/Compass";
import FireMedallion from "../../../../components/DungeonItems/FireTemple/FireMedallion";

class FireTempleItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const fireTempleItemsData = JSON.parse(window.localStorage.getItem("fireTempleItems"));
        this.setState(fireTempleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("fireTempleItems", JSON.stringify(this.state));
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
        const { fireBossKeyLogic, fireKeysLogic, fireMedallionLogic } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Fire Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Fire Temple Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                fireKeysLogic={fireKeysLogic}
                            />
                            <BossKey 
                                fireBossKeyLogic={fireBossKeyLogic} 
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
                            <FireMedallion 
                                fireMedallionLogic={fireMedallionLogic}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default FireTempleItems;