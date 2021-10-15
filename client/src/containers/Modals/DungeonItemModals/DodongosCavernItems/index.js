import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import DungeonMap from "../../../../components/DungeonItems/DodongosCavern/DungeonMap";
import Compass from "../../../../components/DungeonItems/DodongosCavern/Compass";
import GoronRuby from "../../../../components/DungeonItems/DodongosCavern/GoronRuby";

class DodongosCavernItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const dodongosCavernItemsData = JSON.parse(window.localStorage.getItem("dodongosCavernItems"));
        this.setState(dodongosCavernItemsData);
        console.log(dodongosCavernItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("dodongosCavernItems", JSON.stringify(this.state));
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
        const { hasGoronRuby } = this.props.state;
        const { addGoronRuby, removeGoronRuby } = this.props.jewels;

        return (
            <Modal
                trigger={<Button fluid content="Dodongo's Cavern" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Dodongo's Cavern Dungeon Items</Modal.Header>
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
                            <GoronRuby 
                                hasGoronRuby={hasGoronRuby}
                                addGoronRuby={addGoronRuby}
                                removeGoronRuby={removeGoronRuby}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default DodongosCavernItems;