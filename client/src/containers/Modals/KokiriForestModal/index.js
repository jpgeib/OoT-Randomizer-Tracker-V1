import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import KokiriForest from "../../../components/Locations/KokiriForest";

class KokiriForestModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button content="Kokiri Forest" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Kokiri Forest Items</Modal.Header>
                <Modal.Content>
                    <KokiriForest />
                </Modal.Content>
            </Modal>
        );
    }
};

export default KokiriForestModal;