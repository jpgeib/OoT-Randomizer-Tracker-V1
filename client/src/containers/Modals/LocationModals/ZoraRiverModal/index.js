import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import ZoraRiver from "../../../../components/Locations/ZoraRiver";

class ZoraRiverModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Zora River" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Zora River Items</Modal.Header>
                <Modal.Content>
                    <ZoraRiver />
                </Modal.Content>
            </Modal>
        );
    }
};

export default ZoraRiverModal;