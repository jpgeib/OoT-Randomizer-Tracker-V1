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
        sariasOcarina: false,
        kokiriStormsGrotto: false,
        knowItAllSkulltula: false,
        twinsSkulltula: false,
        beanSkulltula: false
    }

    componentDidMount() {
        const kokiriForestData = JSON.parse(window.localStorage.getItem("kokiriForest"));
        this.setState(kokiriForestData);
        // console.log(kokiriForestData);
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
        gotKokiriStormsGrotto: (e) => {
            this.setState({ kokiriStormsGrotto: !this.state.kokiriStormsGrotto });
        },
        gotKnowItAllSkulltula: (e) => {
            this.setState({ knowItAllSkulltula: !this.state.knowItAllSkulltula });
        },
        gotTwinsSkulltula: (e) => {
            this.setState({ twinsSkulltula: !this.state.twinsSkulltula });
        },
        gotBeanSkulltula: (e) => {
            this.setState({ beanSkulltula: !this.state.beanSkulltula });
        }
    }

    render() {

        const { 
            open,
            kokiriSwordChest,
            midoChest1,
            midoChest2,
            midoChest3,
            midoChest4,
            sariasOcarina,
            kokiriStormsGrotto,
            knowItAllSkulltula,
            twinsSkulltula,
            beanSkulltula 
        } = this.state;

        const { hasKokiriTunic, hasOcarina, hasSongOfStorms, hasKokiriSword, emptyBottles, hasHookshot } = this.props.state;

        const kokiriForestItemsAvailable = (
            //Items available by default
            (kokiriSwordChest === false || midoChest1 === false || midoChest2 === false || midoChest3 === false || midoChest4 === false || sariasOcarina === false) ||
            //Kokiri Storms Grotto Available
            ((hasOcarina === true && hasSongOfStorms === true) && (kokiriStormsGrotto === false)) ||
            //Know It All House Skulltula Available
            ((hasKokiriSword === true) && (knowItAllSkulltula === false)) ||
            //Twins House Skulltula Available
            ((hasHookshot === true) && (twinsSkulltula === false)) ||
            //Bean Patch Skulltula Available
            ((hasKokiriSword === true && emptyBottles > 0) && beanSkulltula === false)
        );
        const kokiriForestItemsUnavailable = (
            //Kokiri Storms Grotto Unavailable
            (hasOcarina === false || hasSongOfStorms === false)
        );

        const kokiriForestItemsCollected = (
                (
            kokiriSwordChest && midoChest1 && midoChest2 && midoChest3 && midoChest4
            && sariasOcarina && kokiriStormsGrotto && knowItAllSkulltula &&
            twinsSkulltula && beanSkulltula
            ) === true
        );

        return (
            <Modal
                trigger={<Button 
                            fluid
                            color={(kokiriForestItemsAvailable && "green") || (kokiriForestItemsUnavailable && "red") || (kokiriForestItemsCollected && "grey")} 
                            content="Kokiri Forest" 
                            onClick={this.closeConfigShow} 
                        />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Kokiri Forest Items</Modal.Header>
                <Modal.Content>
                    <KokiriForest
                        hasKokiriTunic={hasKokiriTunic}
                        hasKokiriSword={hasKokiriSword}
                        hasOcarina={hasOcarina}
                        hasSongOfStorms={hasSongOfStorms}
                        hasHookshot={hasHookshot}
                        emptyBottles={emptyBottles}
                        kokiriSwordChest={kokiriSwordChest}
                        midoChest1={midoChest1}
                        midoChest2={midoChest2}
                        midoChest3={midoChest3}
                        midoChest4={midoChest4}
                        sariasOcarina={sariasOcarina}
                        kokiriStormsGrotto={kokiriStormsGrotto}
                        knowItAllSkulltula={knowItAllSkulltula}
                        twinsSkulltula={twinsSkulltula}
                        beanSkulltula={beanSkulltula}
                        kokiriForestLogic={this.kokiriForestLogic}
                    />
                </Modal.Content>
            </Modal>
        );
    }
};

export default KokiriForestModal;