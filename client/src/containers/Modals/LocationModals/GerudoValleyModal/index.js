import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GerudoValley from "../../../../components/Locations/GerudoValley";

class GerudoValleyModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Gerudo Valley" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Gerudo Valley Items</Modal.Header>
                <Modal.Content>
                    <GerudoValley />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GerudoValleyModal;