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
            emptyBottles,
            firstRowLogic,
            secondRowLogic
            // biggoronSword,
            // addBiggoronSword,
            // removeBiggoronSword,
            // fairySlingshot,
            // addFairySlingshot,
            // removeFairySlingshot,
            // fairyOcarina,
            // addFairyOcarina,
            // removeFairyOcarina,
            // ocarinaOfTime,
            // addOcarinaOfTime,
            // removeOcarinaOfTime,
            // bombchus,
            // addBombchus,
            // removeBombchus,
            // hookshot,
            // addHookshot,
            // removeHookshot,
            // longshot,
            // addLongshot,
            // removeLongshot,
            // iceArrows,
            // addIceArrows,
            // removeIceArrows,
            // faroresWind,
            // addFaroresWind,
            // removeFaroresWind,
            // dekuShield,
            // addDekuShield,
            // removeDekuShield
        } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow firstRowLogic={firstRowLogic} />
                <SecondRow
                    secondRowLogic={secondRowLogic}
                    // biggoronSword={biggoronSword}
                    // addBiggoronSword={addBiggoronSword}
                    // removeBiggoronSword={removeBiggoronSword}
                    // fairySlingshot={fairySlingshot}
                    // addFairySlingshot={addFairySlingshot}
                    // removeFairySlingshot={removeFairySlingshot}
                    // fairyOcarina={fairyOcarina}
                    // addFairyOcarina={addFairyOcarina}
                    // removeFairyOcarina={removeFairyOcarina}
                    // ocarinaOfTime={ocarinaOfTime}
                    // addOcarinaOfTime={addOcarinaOfTime}
                    // removeOcarinaOfTime={removeOcarinaOfTime}
                    // bombchus={bombchus}
                    // addBombchus={addBombchus}
                    // removeBombchus={removeBombchus}
                    // hookshot={hookshot}
                    // addHookshot={addHookshot}
                    // removeHookshot={removeHookshot}
                    // longshot={longshot}
                    // addLongshot={addLongshot}
                    // removeLongshot={removeLongshot}
                    // iceArrows={iceArrows}
                    // addIceArrows={addIceArrows}
                    // removeIceArrows={removeIceArrows}
                    // faroresWind={faroresWind}
                    // addFaroresWind={addFaroresWind}
                    // removeFaroresWind={removeFaroresWind}
                    // dekuShield={dekuShield}
                    // addDekuShield={addDekuShield}
                    // removeDekuShield={removeDekuShield}
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