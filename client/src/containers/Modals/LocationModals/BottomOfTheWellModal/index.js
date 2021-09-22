import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import BottomOfTheWell from "../../../../components/Locations/BottomOfTheWell";

class BottomOfTheWellModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Bottom of the Well" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Bottom of the Well Items</Modal.Header>
                <Modal.Content>
                    <BottomOfTheWell />
                </Modal.Content>
            </Modal>
        );
    }
};

export default BottomOfTheWellModal;