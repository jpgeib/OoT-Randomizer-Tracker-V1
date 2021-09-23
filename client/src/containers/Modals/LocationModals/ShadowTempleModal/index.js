import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import ShadowTemple from "../../../../components/Locations/ShadowTemple";

class ShadowTempleModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Shadow Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Shadow Temple Items</Modal.Header>
                <Modal.Content>
                    <ShadowTemple />
                </Modal.Content>
            </Modal>
        );
    }
};

export default ShadowTempleModal;