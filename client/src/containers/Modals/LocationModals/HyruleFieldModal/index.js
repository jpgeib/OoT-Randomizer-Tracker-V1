import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import HyruleField from "../../../../components/Locations/HyruleField";

class HyruleFieldModal extends Component {

    state = {
        open: false,
        southOpenGrotto: false
    }

    componentDidMount() {
        const hyruleFieldData = JSON.parse(window.localStorage.getItem("hyruleField"));
        this.setState(hyruleFieldData);
        console.log(hyruleFieldData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("hyruleField", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    hyruleFieldLogic = {
        gotSouthOpenGrotto: (e) => {
            this.setState({ southOpenGrotto: !this.state.southOpenGrotto });
        }
    }

    render() {

        const { 
            open,
            southOpenGrotto 
        } = this.state;
        const { hasKokiriTunic } = this.props.state;

        return (
            <Modal
                trigger={<Button 
                            fluid
                            color={(southOpenGrotto === false) ? "green" : "grey"} 
                            content="Hyrule Field" 
                            onClick={this.closeConfigShow} 
                        />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Hyrule Field Items</Modal.Header>
                <Modal.Content>
                    <HyruleField
                        hasKokiriTunic={hasKokiriTunic} 
                        southOpenGrotto={southOpenGrotto}
                        hyruleFieldLogic={this.hyruleFieldLogic}
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default HyruleFieldModal;