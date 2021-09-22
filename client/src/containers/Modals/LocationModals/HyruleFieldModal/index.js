import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import HyruleField from "../../../../components/Locations/HyruleField";

class HyruleFieldModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Hyrule Field" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Hyrule Field Items</Modal.Header>
                <Modal.Content>
                    <HyruleField />
                </Modal.Content>
            </Modal>
        );
    }
};

export default HyruleFieldModal;