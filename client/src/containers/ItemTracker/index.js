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
import { increment, decrement } from "../../actions/counter";

class ItemTracker extends Component {
    render() {

        const { tracker, counter, increment, decrement } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow />
                <SecondRow />
                <ThirdRow />
                <FourthRow counter={counter} increment={increment} decrement={decrement} />
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
    return { counter: state.counter }
};

export default compose(connect(mapStateToProps, { increment, decrement }))(ItemTracker);