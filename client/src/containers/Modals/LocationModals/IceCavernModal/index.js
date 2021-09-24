import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import IceCavern from "../../../../components/Locations/IceCavern";

class IceCavernModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Ice Cavern" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Ice Cavern Items</Modal.Header>
                <Modal.Content>
                    <IceCavern />
                </Modal.Content>
            </Modal>
        );
    }
};

export default IceCavernModal;