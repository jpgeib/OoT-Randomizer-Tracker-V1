import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import LonLonRanch from "../../../../components/Locations/LonLonRanch";

class LonLonRanchModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Lon Lon Ranch" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Lon Lon Ranch Items</Modal.Header>
                <Modal.Content>
                    <LonLonRanch />
                </Modal.Content>
            </Modal>
        );
    }
};

export default LonLonRanchModal;