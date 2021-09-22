import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import SacredForestMeadow from "../../../../components/Locations/SacredForestMeadow";

class SacredMeadowModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Sacred Forest Meadow" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Sacred Forest Meadow Items</Modal.Header>
                <Modal.Content>
                    <SacredForestMeadow />
                </Modal.Content>
            </Modal>
        );
    }
};

export default SacredMeadowModal;