import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import DungeonMap from "../../../../components/DungeonItems/IceCavern/DungeonMap";
import Compass from "../../../../components/DungeonItems/IceCavern/Compass";

class IceCavernItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const iceCavernItemsData = JSON.parse(window.localStorage.getItem("iceCavernItems"));
        this.setState(iceCavernItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("iceCavernItems", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    gotDungeonMap = (e) => {
        this.setState({ hasDungeonMap: true });
    }

    removeDungeonMap = (e) => {
        e.preventDefault();
        this.setState({ hasDungeonMap: false });
    }

    gotCompass = (e) => {
        this.setState({ hasCompass: true });
    }

    removeCompass = (e) => {
        e.preventDefault();
        this.setState({ hasCompass: false });
    }

    render() {

        const { open } = this.state;

        return (
            <Modal
                trigger={<Button fluid content="Ice Cavern" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Ice Cavern Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <DungeonMap 
                                hasDungeonMap={this.state.hasDungeonMap}
                                gotDungeonMap={this.gotDungeonMap}
                                removeDungeonMap={this.removeDungeonMap}
                            />
                            <Compass 
                                hasCompass={this.state.hasCompass}
                                gotCompass={this.gotCompass}
                                removeCompass={this.removeCompass}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default IceCavernItems;