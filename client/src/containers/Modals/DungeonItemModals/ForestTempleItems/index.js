import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/ForestTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/ForestTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/ForestTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/ForestTemple/Compass";
import ForestMedallion from "../../../../components/DungeonItems/ForestTemple/ForestMedallion";

class ForestTempleItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

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
                            <SmallKey />
                            <BossKey />
                            <DungeonMap />
                            <Compass />
                            <ForestMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default ForestTempleItems;