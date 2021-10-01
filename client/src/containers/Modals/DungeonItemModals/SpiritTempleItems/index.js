import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/SpiritTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/SpiritTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/SpiritTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/SpiritTemple/Compass";
import SpiritMedallion from "../../../../components/DungeonItems/SpiritTemple/SpiritMedallion";

class SpiritTempleItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

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
                            <SmallKey />
                            <BossKey />
                            <DungeonMap />
                            <Compass />
                            <SpiritMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default SpiritTempleItems;