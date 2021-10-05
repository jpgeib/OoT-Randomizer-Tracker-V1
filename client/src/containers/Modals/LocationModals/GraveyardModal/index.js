import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import Graveyard from "../../../../components/Locations/Graveyard";

class GraveyardModal extends Component {

    state = {
        open: false,
        dampeDigging: false,
        dampeRace1: false,
        dampeRace2: false,
        shieldGrave: false,
        beanHeartPiece: false
    }

    componentDidMount() {
        const graveyardData = JSON.parse(window.localStorage.getItem("graveyard"));
        this.setState(graveyardData);
        console.log(graveyardData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("graveyard", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    graveyardLogic = {
        gotDampeDigging: (e) => {
            this.setState({dampeDigging: !this.state.dampeDigging});
        },
        gotDampeRace1: (e) => {
            this.setState({dampeRace1: !this.state.dampeRace1});
        },
        gotDampeRace2: (e) => {
            this.setState({dampeRace2: !this.state.dampeRace2});
        },
        gotShieldGrave: (e) => {
            this.setState({shieldGrave: !this.state.shieldGrave});
        },
        gotBeanHeartPiece: (e) => {
            this.setState({beanHeartPiece: !this.state.beanHeartPiece});
        }
    }

    render() {

        const { open } = this.state;
        const { 
            hasLongshot, 
            hasKokiriTunic
        } = this.props.state;

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
                        hasLongshot={hasLongshot}
                        hasKokiriTunic={hasKokiriTunic}
                        dampeDigging={this.state.dampeDigging}
                        dampeRace1={this.state.dampeRace1}
                        dampeRace2={this.state.dampeRace2}
                        shieldGrave={this.state.shieldGrave}
                        beanHeartPiece={this.state.beanHeartPiece}
                        graveyardLogic={this.graveyardLogic} 
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GraveyardModal;