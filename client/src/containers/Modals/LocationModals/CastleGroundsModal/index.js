import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import CastleGrounds from "../../../../components/Locations/CastleGrounds";

class CastleGroundsModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Castle Grounds" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Castle Grounds Items</Modal.Header>
                <Modal.Content>
                    <CastleGrounds />
                </Modal.Content>
            </Modal>
        );
    }
};

export default CastleGroundsModal;