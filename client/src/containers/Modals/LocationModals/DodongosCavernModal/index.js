import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import DodongosCavern from "../../../../components/Locations/DodongosCavern";

class DodongosCavernModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Dodongo's Cavern" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Dodongo's Cavern Items</Modal.Header>
                <Modal.Content>
                    <DodongosCavern />
                </Modal.Content>
            </Modal>
        );
    }
};

export default DodongosCavernModal;