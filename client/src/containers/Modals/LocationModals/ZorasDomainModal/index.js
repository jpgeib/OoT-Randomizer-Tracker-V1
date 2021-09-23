import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import ZorasDomain from "../../../../components/Locations/ZorasDomain";

class ZorasDomainModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Zora's Domain" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Zora's Domain Items</Modal.Header>
                <Modal.Content>
                    <ZorasDomain />
                </Modal.Content>
            </Modal>
        );
    }
};

export default ZorasDomainModal;