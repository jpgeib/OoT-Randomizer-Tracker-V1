import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import SpiritTemple from "../../../../components/Locations/SpiritTemple";

class SpiritTempleModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Spirit Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Spirit Temple Items</Modal.Header>
                <Modal.Content>
                    <SpiritTemple />
                </Modal.Content>
            </Modal>
        );
    }
};

export default SpiritTempleModal;