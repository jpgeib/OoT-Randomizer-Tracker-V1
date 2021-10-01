import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/ForestTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/ForestTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/DungeonMap";
import Compass from "../../../../components/DungeonItems/Compass";
import FireMedallion from "../../../../components/DungeonItems/FireTemple/FireMedallion";

class FireTempleItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

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
                            <SmallKey />
                            <BossKey />
                            <DungeonMap />
                            <Compass />
                            <FireMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default FireTempleItems;