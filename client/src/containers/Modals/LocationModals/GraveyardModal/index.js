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
        const { 
            hasLongshot, 
            obtainedItem,
            hasKokiriTunic
        } = this.props.state;
        const { items } = this.props;

        return (
            <Modal
                trigger={<Button 
                            color={(hasLongshot === true || hasKokiriTunic === true) ? "green" : "red"} 
                            fluid 
                            content="Graveyard"
                            onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Graveyard Items</Modal.Header>
                <Modal.Content>
                    <Graveyard 
                        items={items} 
                        obtainedItem={obtainedItem} 
                        hasLongshot={hasLongshot}
                        hasKokiriTunic={hasKokiriTunic} 
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GraveyardModal;