import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GreatDekuTree from "../../../../components/Locations/GreatDekuTree";

class GreatDekuTreeModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Great Deku Tree" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Great Deku Tree Items</Modal.Header>
                <Modal.Content>
                    <GreatDekuTree />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GreatDekuTreeModal;