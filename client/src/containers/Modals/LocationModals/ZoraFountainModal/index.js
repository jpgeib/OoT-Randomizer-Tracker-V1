import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import ZoraFountain from "../../../../components/Locations/ZoraFountain";

class ZoraFountainModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Zora Fountain" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Zora Fountain Items</Modal.Header>
                <Modal.Content>
                    <ZoraFountain />
                </Modal.Content>
            </Modal>
        );
    }
};

export default ZoraFountainModal;