import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import LostWoods from "../../../../components/Locations/LostWoods";

class LostWoodsModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Lost Woods" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Kokiri Forest Items</Modal.Header>
                <Modal.Content>
                    <LostWoods />
                </Modal.Content>
            </Modal>
        );
    }
};

export default LostWoodsModal;