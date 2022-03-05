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

class ItemTracker extends Component {
    render() {

        const { 
            state,
            tracker, 
            skulltulas,  
            hookshot,
            kokiriSword,
            emptyBottles,
            dekuSticks,
            dekuNuts,
            bombs,
            fairyBow,
            fairyOcarina,
            addFairyOcarina,
            removeFairyOcarina,
            ocarinaOfTime,
            addOcarinaOfTime,
            removeOcarinaOfTime,
            fireArrows,
            addFireArrows,
            removeFireArrows
        } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow
                    state={state} 
                    kokiriSword={kokiriSword}
                    dekuSticks={dekuSticks}
                    dekuNuts={dekuNuts}
                    bombs={bombs}
                    fairyBow={fairyBow}
                    fireArrows={fireArrows}
                    addFireArrows={addFireArrows}
                    removeFireArrows={removeFireArrows}
                />
                <SecondRow 
                    state={state} 
                    hookshot={hookshot}
                    fairyOcarina={fairyOcarina}
                    addFairyOcarina={addFairyOcarina}
                    removeFairyOcarina={removeFairyOcarina}
                    ocarinaOfTime={ocarinaOfTime}
                    addOcarinaOfTime={addOcarinaOfTime}
                    removeOcarinaOfTime={removeOcarinaOfTime}
                />
                <ThirdRow />
                <FourthRow 
                    state={state}
                    skulltulas={skulltulas}
                    emptyBottles={emptyBottles} 
                />
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

export default ItemTracker;