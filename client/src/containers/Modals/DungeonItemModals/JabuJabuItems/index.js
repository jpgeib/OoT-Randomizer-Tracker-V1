import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import DungeonMap from "../../../../components/DungeonItems/JabuJabusBelly/DungeonMap";
import Compass from "../../../../components/DungeonItems/JabuJabusBelly/Compass";
import ZoraSapphire from "../../../../components/DungeonItems/JabuJabusBelly/ZoraSapphire";

class JabuJabuItems extends Component {

    state = {
        open: false,
        hasDungeonMap: false,
        hasCompass: false
    }

    componentDidMount() {
        const jabuJabuItemsData = JSON.parse(window.localStorage.getItem("jabuJabuItems"));
        this.setState(jabuJabuItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("jabuJabuItems", JSON.stringify(this.state));
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
        const { hasZoraSapphire } = this.props.state;
        const { addZoraSapphire, removeZoraSapphire } = this.props.jewels;

        return (
            <Modal
                trigger={<Button fluid content="Jabu Jabu's Belly" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Jabu Jabu's Belly Dungeon Items</Modal.Header>
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
                            <ZoraSapphire
                                hasZoraSapphire={hasZoraSapphire}
                                addZoraSapphire={addZoraSapphire}
                                removeZoraSapphire={removeZoraSapphire}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default JabuJabuItems;