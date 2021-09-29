import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import Graveyard from "../../../../components/Locations/Graveyard";

class GraveyardModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { hasLongshot } = this.props.state;

        return (
            <Modal
                trigger={<Button color={(hasLongshot === true) ? "green" : "red"} fluid content="Graveyard" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Graveyard Items</Modal.Header>
                <Modal.Content>
                    <Graveyard hasLongshot={hasLongshot} />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GraveyardModal;