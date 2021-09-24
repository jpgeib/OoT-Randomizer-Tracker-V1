import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GanonsCastle from "../../../../components/Locations/GanonsCastle";

class GanonsCastleModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Ganon's Castle" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Ganon's Castle Items</Modal.Header>
                <Modal.Content>
                    <GanonsCastle />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GanonsCastleModal;