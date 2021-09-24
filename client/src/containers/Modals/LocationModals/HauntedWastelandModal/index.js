import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import HauntedWasteland from "../../../../components/Locations/HauntedWasteland";

class HauntedWastelandModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Haunted Wasteland" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Haunted Wasteland Items</Modal.Header>
                <Modal.Content>
                    <HauntedWasteland />
                </Modal.Content>
            </Modal>
        );
    }
};

export default HauntedWastelandModal;