import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/GanonsCastle/SmallKey";
import BossKey from "../../../../components/DungeonItems/GanonsCastle/BossKey";

class GanonsCastleItems extends Component {

    state = {
        open: false
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { state, smallKeys, bossKeys } = this.props;

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
                                counter={state.ganonKeys}
                                addGanonKey={smallKeys.addGanonKey}
                                removeGanonKey={smallKeys.removeGanonKey}
                            />
                            <BossKey 
                                hasGanonBossKey={state.hasGanonBossKey}
                                addGanonBossKey={bossKeys.addGanonBossKey}
                                removeGanonBossKey={bossKeys.removeGanonBossKey}
                            />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default GanonsCastleItems;