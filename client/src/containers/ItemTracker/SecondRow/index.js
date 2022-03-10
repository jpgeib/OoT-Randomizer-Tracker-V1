import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BigGoronSword from "../../../components/Items/BigGoronSword";
import FairySlingshot from "../../../components/Items/FairySlingshot";
import Ocarina from "../../../components/Items/Ocarina";
import Bombchus from "../../../components/Items/Bombchus";
import HookShot from "../../../components/Items/HookShot";
import LongShot from "../../../components/Items/LongShot";
import IceArrows from "../../../components/Items/IceArrows";
import FaroresWind from "../../../components/Items/FaroresWind";
import DekuShield from "../../../components/Items/DekuShield";

class SecondRow extends Component {

    render() {

        const { hasLongshot, hasHookshot } = this.props.state;
        const { gotHookshot, removeHookshot, gotLongshot, removeLongshot } = this.props.hookshot;
        const {
            biggoronSword,
            addBiggoronSword,
            removeBiggoronSword,
            fairySlingshot,
            addFairySlingshot,
            removeFairySlingshot,
            fairyOcarina,
            addFairyOcarina,
            removeFairyOcarina,
            ocarinaOfTime,
            addOcarinaOfTime,
            removeOcarinaOfTime,
            bombchus,
            addBombchus,
            removeBombchus,
            dekuShield,
            addDekuShield,
            removeDekuShield
        } = this.props;

        return (
            <Grid.Row>
                <BigGoronSword 
                    biggoronSword={biggoronSword}
                    addBiggoronSword={addBiggoronSword}
                    removeBiggoronSword={removeBiggoronSword}
                />
                <FairySlingshot 
                    counter={fairySlingshot}
                    add={addFairySlingshot}
                    remove={removeFairySlingshot}
                />
                <Ocarina
                    fairyOcarina={fairyOcarina}
                    addFairyOcarina={addFairyOcarina}
                    removeFairyOcarina={removeFairyOcarina}
                    ocarinaOfTime={ocarinaOfTime}
                    addOcarinaOfTime={addOcarinaOfTime}
                    removeOcarinaOfTime={removeOcarinaOfTime}
                />
                <Bombchus
                    counter={bombchus}
                    add={addBombchus}
                    remove={removeBombchus}
                />
                {hasLongshot === true ?
                    <LongShot
                        removeLongshot={removeLongshot}
                    /> :
                    <HookShot
                        hasLongshot={hasLongshot}
                        gotLongshot={gotLongshot}
                        gotHookshot={gotHookshot}
                        removeHookshot={removeHookshot}
                        hasHookshot={hasHookshot}
                    />}
                <IceArrows />
                <FaroresWind />
                <DekuShield
                    dekuShield={dekuShield}
                    addDekuShield={addDekuShield}
                    removeDekuShield={removeDekuShield}
                />
            </Grid.Row>
        );
    }

}

export default SecondRow;