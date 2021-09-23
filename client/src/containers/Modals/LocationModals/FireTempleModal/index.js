import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import FireTemple from "../../../../components/Locations/FireTemple";

class FireTempleModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Fire Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Fire Temple Items</Modal.Header>
                <Modal.Content>
                    <FireTemple />
                </Modal.Content>
            </Modal>
        );
    }
};

export default FireTempleModal;