import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import KakarikoVillage from "../../../../components/Locations/KakarikoVillage";

class KakarikoVillageModal extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { skulltulaCounter } = this.props.state;

        return (
            <Modal
                trigger={<Button 
                            color={((skulltulaCounter >= 10 || skulltulaCounter >= 20 || skulltulaCounter >= 30 || skulltulaCounter >= 40 || skulltulaCounter >= 50) && "green")
                                    || ((skulltulaCounter < 10 || skulltulaCounter < 20 || skulltulaCounter < 30 || skulltulaCounter < 40 || skulltulaCounter < 50) && "red")
                                    || "gray"
                        } 
                            fluid 
                            content="Kakariko Village" 
                            onClick={this.closeConfigShow} 
                        />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Kakariko Village Items</Modal.Header>
                <Modal.Content>
                    <KakarikoVillage 
                        skulltulaCounter={skulltulaCounter} 
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default KakarikoVillageModal;