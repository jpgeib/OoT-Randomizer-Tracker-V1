import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/WaterTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/WaterTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/WaterTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/WaterTemple/Compass";
import WaterMedallion from "../../../../components/DungeonItems/WaterTemple/WaterMedallion";

class WaterTempleItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

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
                            <SmallKey />
                            <BossKey />
                            <DungeonMap />
                            <Compass />
                            <WaterMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default WaterTempleItems;