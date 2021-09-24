import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import JabuJabusBelly from "../../../../components/Locations/JabuJabusBelly";

class JabuJabusBellyModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Jabu Jabu's Belly" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Jabu Jabu's Belly Items</Modal.Header>
                <Modal.Content>
                    <JabuJabusBelly />
                </Modal.Content>
            </Modal>
        );
    }
};

export default JabuJabusBellyModal;