import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import KokiriForest from "../../../../components/Locations/KokiriForest";

class KokiriForestModal extends Component {

    state = {
        open: false,
        kokiriSwordChest: false,
        midoChest1: false,
        midoChest2: false,
        midoChest3: false,
        midoChest4: false,
        sariasOcarina: false
    }

    componentDidMount() {
        const kokiriForestData = JSON.parse(window.localStorage.getItem("kokiriForest"));
        this.setState(kokiriForestData);
        console.log(kokiriForestData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("kokiriForest", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    kokiriForestLogic = {
        gotKokiriSwordChest: (e) => {
            this.setState({ kokiriSwordChest: !this.state.kokiriSwordChest });
        },
        gotMidoChest1: (e) => {
            this.setState({ midoChest1: !this.state.midoChest1 });
        },
        gotMidoChest2: (e) => {
            this.setState({ midoChest2: !this.state.midoChest2 });
        },
        gotMidoChest3: (e) => {
            this.setState({ midoChest3: !this.state.midoChest3 });
        },
        gotMidoChest4: (e) => {
            this.setState({ midoChest4: !this.state.midoChest4 });
        },
        gotSariasOcarina: (e) => {
            this.setState({ sariasOcarina: !this.state.sariasOcarina });
        },
    }

    render() {

        const { 
            open,
            kokiriSwordChest,
            midoChest1,
            midoChest2,
            midoChest3,
            midoChest4,
            sariasOcarina 
        } = this.state;
        const { hasKokiriTunic } = this.props.state;

        return (
            <Modal
                trigger={<Button fluid content="Kokiri Forest" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Kokiri Forest Items</Modal.Header>
                <Modal.Content>
                    <KokiriForest
                        hasKokiriTunic={hasKokiriTunic}
                        kokiriSwordChest={kokiriSwordChest}
                        midoChest1={midoChest1}
                        midoChest2={midoChest2}
                        midoChest3={midoChest3}
                        midoChest4={midoChest4}
                        sariasOcarina={sariasOcarina}
                        kokiriForestLogic={this.kokiriForestLogic}
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default KokiriForestModal;