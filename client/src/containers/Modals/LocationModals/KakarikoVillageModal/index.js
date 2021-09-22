import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import KakarikoVillage from "../../../../components/Locations/KakarikoVillage";

class KakarikoVillageModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Kakariko Village" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Kakariko Village Items</Modal.Header>
                <Modal.Content>
                    <KakarikoVillage />
                </Modal.Content>
            </Modal>
        );
    }
};

export default KakarikoVillageModal;