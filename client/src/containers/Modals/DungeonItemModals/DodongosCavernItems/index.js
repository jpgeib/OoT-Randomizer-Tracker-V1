import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import DungeonMap from "../../../../components/DungeonItems/DungeonMap";
import Compass from "../../../../components/DungeonItems/Compass";
import GoronRuby from "../../../../components/DungeonItems/DodongosCavern/GoronRuby";

class DodongosCavernItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Dodongo's Cavern" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Dodongo's Cavern Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <DungeonMap />
                            <Compass />
                            <GoronRuby />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default DodongosCavernItems;