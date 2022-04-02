import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import DungeonMap from "../../../../components/DungeonItems/GreatDekuTree/DungeonMap";
import Compass from "../../../../components/DungeonItems/GreatDekuTree/Compass";
import KokiriEmerald from "../../../../components/DungeonItems/GreatDekuTree/KokiriEmerald";

class DekuTreeItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const dekuTreeItemsData = JSON.parse(window.localStorage.getItem("dekuTreeItems"));
        this.setState(dekuTreeItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("dekuTreeItems", JSON.stringify(this.state));
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
        const { kokiriEmerald, addKokiriEmerald, removeKokiriEmerald } = this.props.gemsLogic;

        return (
            <Modal
                trigger={<Button fluid content="Great Deku Tree" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Great Deku Tree Dungeon Items</Modal.Header>
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
                            <KokiriEmerald 
                                kokiriEmerald={kokiriEmerald}
                                addKokiriEmerald={addKokiriEmerald}
                                removeKokiriEmerald={removeKokiriEmerald} 
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default DekuTreeItems;