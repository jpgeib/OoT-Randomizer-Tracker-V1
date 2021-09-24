import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import DesertColossus from "../../../../components/Locations/DesertColossus";

class DesertColossusModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Desert Colossus" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Desert Colossus Items</Modal.Header>
                <Modal.Content>
                    <DesertColossus />
                </Modal.Content>
            </Modal>
        );
    }
};

export default DesertColossusModal;