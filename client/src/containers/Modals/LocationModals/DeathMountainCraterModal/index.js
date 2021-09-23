import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import DeathMountainCrater from "../../../../components/Locations/DeathMountainCrater";

class DeathMountainCraterModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Death Mountain Crater" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Death Mountain Crater Items</Modal.Header>
                <Modal.Content>
                    <DeathMountainCrater />
                </Modal.Content>
            </Modal>
        );
    }
};

export default DeathMountainCraterModal;