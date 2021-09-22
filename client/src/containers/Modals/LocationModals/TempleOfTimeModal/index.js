import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import TempleOfTime from "../../../../components/Locations/TempleOfTime";

class TempleOfTimeModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Temple of Time" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Temple of Time Items</Modal.Header>
                <Modal.Content>
                    <TempleOfTime />
                </Modal.Content>
            </Modal>
        );
    }
};

export default TempleOfTimeModal;