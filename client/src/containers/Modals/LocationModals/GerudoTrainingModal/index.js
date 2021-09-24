import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GerudoTrainingGrounds from "../../../../components/Locations/GerudoTrainingGrounds";

class GerudoTrainingModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Gerudo Training Grounds" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Gerudo Training Grounds Items</Modal.Header>
                <Modal.Content>
                    <GerudoTrainingGrounds />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GerudoTrainingModal;