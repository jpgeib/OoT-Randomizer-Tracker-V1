import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import CastleTown from "../../../../components/Locations/CastleTown";

class CastleTownModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Castle Town" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Castle Town Items</Modal.Header>
                <Modal.Content>
                    <CastleTown />
                </Modal.Content>
            </Modal>
        );
    }
};

export default CastleTownModal;