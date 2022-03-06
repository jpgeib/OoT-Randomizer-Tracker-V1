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
            addDekuSticks,
            removeDekuSticks,
            dekuNuts,
            addDekuNuts,
            removeDekuNuts,
            bombs,
            addBombs,
            removeBombs,
            fairyBow,
            addFairyBow,
            removeFairyBow,
            fireArrows,
            addFireArrows,
            removeFireArrows,
            fairySlingshot,
            addFairySlingshot,
            removeFairySlingshot,
            fairyOcarina,
            addFairyOcarina,
            removeFairyOcarina,
            ocarinaOfTime,
            addOcarinaOfTime,
            removeOcarinaOfTime,
            dekuShield,
            addDekuShield,
            removeDekuShield
        } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow
                    state={state}
                    dekuSticks={dekuSticks}
                    addDekuSticks={addDekuSticks}
                    removeDekuSticks={removeDekuSticks}
                    dekuNuts={dekuNuts}
                    addDekuNuts={addDekuNuts}
                    removeDekuNuts={removeDekuNuts}
                    bombs={bombs}
                    addBombs={addBombs}
                    removeBombs={removeBombs}
                    fairyBow={fairyBow}
                    addFairyBow={addFairyBow}
                    removeFairyBow={removeFairyBow}
                    
                    kokiriSword={kokiriSword}
                    
                    fireArrows={fireArrows}
                    addFireArrows={addFireArrows}
                    removeFireArrows={removeFireArrows}
                />
                <SecondRow
                    state={state}
                    hookshot={hookshot}
                    fairySlingshot={fairySlingshot}
                    addFairySlingshot={addFairySlingshot}
                    removeFairySlingshot={removeFairySlingshot}
                    fairyOcarina={fairyOcarina}
                    addFairyOcarina={addFairyOcarina}
                    removeFairyOcarina={removeFairyOcarina}
                    ocarinaOfTime={ocarinaOfTime}
                    addOcarinaOfTime={addOcarinaOfTime}
                    removeOcarinaOfTime={removeOcarinaOfTime}
                    dekuShield={dekuShield}
                    addDekuShield={addDekuShield}
                    removeDekuShield={removeDekuShield}
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