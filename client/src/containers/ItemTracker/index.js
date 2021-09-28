import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import SixthRow from "./SixthRow";
import MasterSword from "../../components/Items/MasterSword";
import HookShot from "../../components/Items/HookShot";

import { connect } from "react-redux";
import { compose } from "redux";
import { addSkulltula, removeSkulltula } from "../../actions/skulltulaCounter";

class ItemTracker extends Component {
    render() {

        const { tracker, skulltulaCounter, addSkulltula, removeSkulltula } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow />
                <SecondRow />
                <ThirdRow />
                <FourthRow counter={skulltulaCounter} increment={addSkulltula} decrement={removeSkulltula} />
                <FifthRow />
                <SixthRow />
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

function mapStateToProps(state) {
    return { skulltulaCounter: state.skulltulaCounter }
};

export default compose(connect(mapStateToProps, { addSkulltula, removeSkulltula }))(ItemTracker);