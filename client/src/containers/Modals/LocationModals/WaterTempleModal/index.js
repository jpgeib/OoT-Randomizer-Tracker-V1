import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import WaterTemple from "../../../../components/Locations/WaterTemple";

class WaterTempleModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Water Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Water Temple Items</Modal.Header>
                <Modal.Content>
                    <WaterTemple />
                </Modal.Content>
            </Modal>
        );
    }
};

export default WaterTempleModal;