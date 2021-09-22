import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import ForestTemple from "../../../../components/Locations/ForestTemple";

class ForestTempleModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Forest Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Forest Temple Items</Modal.Header>
                <Modal.Content>
                    <ForestTemple />
                </Modal.Content>
            </Modal>
        );
    }
};

export default ForestTempleModal;