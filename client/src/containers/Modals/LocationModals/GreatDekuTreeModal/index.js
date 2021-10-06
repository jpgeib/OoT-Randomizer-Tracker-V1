import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import GreatDekuTree from "../../../../components/Locations/GreatDekuTree";

class GreatDekuTreeModal extends Component {

    state = {
        open: false,
        lobbyChest: false,
        compassChest: false,
        compassSideChest: false
    }

    componentDidMount() {
        const dekuTreeData = JSON.parse(window.localStorage.getItem("dekuTree"));
        this.setState(dekuTreeData);
        console.log(dekuTreeData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("dekuTree", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    dekuTreeLogic = {
        gotLobbyChest: (e) => {
            this.setState({ lobbyChest: !this.state.lobbyChest });
        },
        gotCompassChest: (e) => {
            this.setState({ compassChest: !this.state.compassChest });
        },
        gotCompassSideChest: (e) => {
            this.setState({ compassSideChest: !this.state.compassSideChest });
        }
    }

    render() {

        const { 
            open,
            lobbyChest,
            compassChest,
            compassSideChest 
        } = this.state;
        const { hasKokiriTunic } = this.props.state;
        const dekuTreeItemsAvailable = (lobbyChest && compassChest && compassSideChest);

        return (
            <Modal
                trigger={<Button 
                            fluid
                            color={(dekuTreeItemsAvailable === false) ? "green" : "grey"} 
                            content="Great Deku Tree" 
                            onClick={this.closeConfigShow} 
                        />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Great Deku Tree Items</Modal.Header>
                <Modal.Content>
                    <GreatDekuTree
                        hasKokiriTunic={hasKokiriTunic}
                        lobbyChest={lobbyChest}
                        compassChest={compassChest}
                        compassSideChest={compassSideChest}
                        dekuTreeLogic={this.dekuTreeLogic}
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default GreatDekuTreeModal;