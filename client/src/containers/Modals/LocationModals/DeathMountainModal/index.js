import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import DeathMountain from "../../../../components/Locations/DeathMountain";

class DeathMountainModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Death Mountain" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Death Mountain Items</Modal.Header>
                <Modal.Content>
                    <DeathMountain />
                </Modal.Content>
            </Modal>
        );
    }
};

export default DeathMountainModal;