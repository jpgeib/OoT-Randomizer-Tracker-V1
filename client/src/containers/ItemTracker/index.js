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
import { addDekuSticks, removeDekuSticks } from "../../actions/sticksCounter";

class ItemTracker extends Component {
    render() {

        const { tracker, 
                skulltulaCounter,  
                addSkulltula, 
                removeSkulltula, 
                sticksCounter, 
                addDekuSticks, 
                removeDekuSticks,
                state,
                hookshot
            } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow counter={sticksCounter} increment={addDekuSticks} decrement={removeDekuSticks} />
                <SecondRow 
                    state={state} 
                    hookshot={hookshot}
                />
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
    return { 
        skulltulaCounter: state.skulltulaCounter,
        sticksCounter: state.sticksCounter
     }
};

export default compose(connect(mapStateToProps, { addSkulltula, removeSkulltula, addDekuSticks, removeDekuSticks }))(ItemTracker);