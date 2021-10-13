import React, { Component } from "react";
import { Grid, Button, Modal } from "semantic-ui-react";
import SmallKey from "../../../../components/DungeonItems/FireTemple/SmallKey";
import BossKey from "../../../../components/DungeonItems/FireTemple/BossKey";
import DungeonMap from "../../../../components/DungeonItems/FireTemple/DungeonMap";
import Compass from "../../../../components/DungeonItems/FireTemple/Compass";
import FireMedallion from "../../../../components/DungeonItems/FireTemple/FireMedallion";

class FireTempleItems extends Component {

    state = {
        open: false
    }

    componentDidMount() {
        const fireTempleItemsData = JSON.parse(window.localStorage.getItem("fireTempleItems"));
        this.setState(fireTempleItemsData);
        console.log(fireTempleItemsData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("fireTempleItems", JSON.stringify(this.state));
    }

    closeConfigShow = () => this.setState({ open: true });

    close = () => this.setState({ open: false });

    render() {

        const { open } = this.state;
        const { state, bossKeys } = this.props;

        return (
            <Modal
                trigger={<Button fluid content="Fire Temple" onClick={this.closeConfigShow} />}
                open={open}
                onClose={this.close}
            >
                <Modal.Header>Fire Temple Dungeon Items</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Row>
                            <SmallKey />
                            <BossKey hasFireBossKey={state.hasFireBossKey} bossKeys={bossKeys} />
                            <DungeonMap />
                            <Compass />
                            <FireMedallion />
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
            </Modal>
        );
    }
};

export default FireTempleItems;