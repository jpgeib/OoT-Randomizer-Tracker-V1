import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GoronCity from "../../../../components/Locations/GoronCity";

class GoronCityModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Goron City" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Goron City Items</Modal.Header>
                <Modal.Content>
                    <GoronCity />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GoronCityModal;