import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import DungeonMap from "../../../../components/DungeonItems/JabuJabusBelly/DungeonMap";
import Compass from "../../../../components/DungeonItems/JabuJabusBelly/Compass";
import ZoraSapphire from "../../../../components/DungeonItems/JabuJabusBelly/ZoraSapphire";

class JabuJabuItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Jabu Jabu's Belly" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Jabu Jabu's Belly Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <DungeonMap />
                            <Compass />
                            <ZoraSapphire />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default JabuJabuItems;