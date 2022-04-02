import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/ForestTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/ForestTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/ForestTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/ForestTemple/Compass";
import ForestMedallion from "../../../../components/DungeonItems/ForestTemple/ForestMedallion";

class ForestTempleItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const forestTempleItemsData = JSON.parse(window.localStorage.getItem("forestTempleItems"));
        this.setState(forestTempleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("forestTempleItems", JSON.stringify(this.state));
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
        const { smallKeys, state, bossKeys, forestMedallionLogic } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Forest Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Forest Temple Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                addForestKey={smallKeys.addForestKey} 
                                removeForestKey={smallKeys.removeForestKey} 
                                counter={state.forestKeys} 
                            />
                            <BossKey 
                                hasForestBossKey={state.hasForestBossKey}
                                bossKeys={bossKeys}
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
                            <ForestMedallion 
                                forestMedallionLogic={forestMedallionLogic}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default ForestTempleItems;