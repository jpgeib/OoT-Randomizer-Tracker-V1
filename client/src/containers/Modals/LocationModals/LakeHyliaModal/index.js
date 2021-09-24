import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import LakeHylia from "../../../../components/Locations/LakeHylia";

class LakeHyliaModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Lake Hylia" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Lake Hylia Items</Modal.Header>
                <Modal.Content>
                    <LakeHylia />
                </Modal.Content>
            </Modal>
        );
    }
};

export default LakeHyliaModal;