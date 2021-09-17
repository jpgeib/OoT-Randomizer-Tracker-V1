import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FirstRow from "./FirstRow";
import MasterSword from "../../components/Items/MasterSword";
import BigGoronSword from "../../components/Items/BigGoronSword";
import FairySlingshot from "../../components/Items/FairySlingshot";
import FairyOcarina from "../../components/Items/FairyOcarina";
import Bombchus from "../../components/Items/Bombchus";
import HookShot from "../../components/Items/HookShot";
import IceArrows from "../../components/Items/IceArrows";
import FaroresWind from "../../components/Items/FaroresWind";
import DekuShield from "../../components/Items/DekuShield";
import HylianShield from "../../components/Items/HylianShield";

class ItemTracker extends Component {
    render() {

        const { tracker } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow />
                <Grid.Row>
                    <BigGoronSword />
                    <FairySlingshot />
                    <FairyOcarina />
                    <Bombchus />
                    <HookShot />
                    <IceArrows />
                    <FaroresWind />
                    <DekuShield />
                </Grid.Row>
                <Grid.Row>
                    <HylianShield />
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