import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import HookShot from "../../components/Items/HookShot";
import MasterSword from "../../components/Items/MasterSword";
import DekuSticks from "../../components/Items/DekuSticks";
import DekuNuts from "../../components/Items/DekuNuts";
import BombBag from "../../components/Items/BombBag";
import FairyBow from "../../components/Items/FairyBow";
import FireArrows from "../../components/Items/FireArrows";
import DinsFire from "../../components/Items/DinsFire";
import KokiriSword from "../../components/Items/KokiriSword";

class ItemTracker extends Component {
    render() {

        const { tracker } = this.props;

        return (
            <Grid style={tracker}>
                <Grid.Row>
                    <DekuSticks />
                    <DekuNuts />
                    <BombBag />
                    <FairyBow />
                    <FireArrows />
                    <DinsFire />
                    <KokiriSword />
                    <MasterSword />
                </Grid.Row>
                <Grid.Row>
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                </Grid.Row>
                <Grid.Row>
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                </Grid.Row>
                <Grid.Row>
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                </Grid.Row>
                <Grid.Row>
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                </Grid.Row>
                <Grid.Row>
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                </Grid.Row>
                <Grid.Row>
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                    <HookShot />
                    <MasterSword />
                </Grid.Row>
            </Grid>
        );
    }
}

export default ItemTracker;