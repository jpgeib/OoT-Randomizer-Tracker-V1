import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import LightMedallion from "../../../../components/DungeonItems/Default/LightMedallion";

class DefaultItem extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Default" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Default Dungeon Item</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <LightMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default DefaultItem;