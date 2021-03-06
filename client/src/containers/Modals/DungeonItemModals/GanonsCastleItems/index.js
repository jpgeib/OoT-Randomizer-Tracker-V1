import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/GanonsCastle/SmallKey";
import BossKey from "../../../../components/DungeonItems/GanonsCastle/BossKey";

class GanonsCastleItems extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const ganonsCastleItemsData = JSON.parse(window.localStorage.getItem("ganonsCastleItems"));
        this.setState(ganonsCastleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("ganonsCastleItems", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { ganonKeysLogic, ganonBossKeyLogic } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Ganon's Castle" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Ganon's Castle Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey 
                                ganonKeysLogic={ganonKeysLogic}
                            />
                            <BossKey 
                                ganonBossKeyLogic={ganonBossKeyLogic}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default GanonsCastleItems;