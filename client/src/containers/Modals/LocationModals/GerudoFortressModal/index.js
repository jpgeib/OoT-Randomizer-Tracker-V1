import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GerudoFortress from "../../../../components/Locations/GerudoFortress";

class GerudoFortressModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Gerudo Fortress" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Gerudo Fortress Items</Modal.Header>
                <Modal.Content>
                    <GerudoFortress />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GerudoFortressModal;