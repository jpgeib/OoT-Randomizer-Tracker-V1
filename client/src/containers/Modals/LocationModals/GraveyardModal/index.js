import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import Graveyard from "../../../../components/Locations/Graveyard";

class GraveyardModal extends Component {

    state = {
        open: false,
        dampeDigging: false,
        dampeRace1: false,
        dampeRace2: false,
        shieldGrave: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    graveyardLogic = {
        gotDampeDigging: (e) => {
            this.setState({dampeDigging: !this.state.dampeDigging});
        },
    }

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
                        dampeDigging={this.state.dampeDigging}
                        graveyardLogic={this.graveyardLogic} 
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GraveyardModal;