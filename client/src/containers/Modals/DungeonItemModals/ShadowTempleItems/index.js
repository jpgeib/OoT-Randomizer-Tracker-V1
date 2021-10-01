import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/ShadowTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/ShadowTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/ShadowTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/ShadowTemple/Compass";
import ShadowMedallion from "../../../../components/DungeonItems/ShadowTemple/ShadowMedallion";

class ShadowTempleItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

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
                            <SmallKey />
                            <BossKey />
                            <DungeonMap />
                            <Compass />
                            <ShadowMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default ShadowTempleItems;