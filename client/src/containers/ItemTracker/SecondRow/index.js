import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BigGoronSword from "../../../components/Items/BigGoronSword";
import FairySlingshot from "../../../components/Items/FairySlingshot";
import Ocarina from "../../../components/Items/Ocarina";
import Bombchus from "../../../components/Items/Bombchus";
import HookShot from "../../../components/Items/HookShot";
import IceArrows from "../../../components/Items/IceArrows";
import FaroresWind from "../../../components/Items/FaroresWind";
import DekuShield from "../../../components/Items/DekuShield";

class SecondRow extends Component {

    render() {

        const { biggoronSword, addBiggoronSword, removeBiggoronSword } = this.props.secondRowLogic.biggoronSwordLogic;
        const { fairySlingshot, addFairySlingshot, removeFairySlingshot } = this.props.secondRowLogic.fairySlingshotLogic;
        const { fairyOcarina, addFairyOcarina, removeFairyOcarina, ocarinaOfTime, addOcarinaOfTime, removeOcarinaOfTime } = this.props.secondRowLogic.ocarinaLogic;
        const { bombchus, addBombchus, removeBombchus } = this.props.secondRowLogic.bombchusLogic;
        const { hookshot, addHookshot, removeHookshot, longshot, addLongshot, removeLongshot } = this.props.secondRowLogic.hookshotLogic;
        const { iceArrows, addIceArrows, removeIceArrows } = this.props.secondRowLogic.iceArrowLogic;
        const { faroresWind, addFaroresWind, removeFaroresWind } = this.props.secondRowLogic.faroresWindLogic;
        const { dekuShield, addDekuShield, removeDekuShield } = this.props.secondRowLogic.dekuShieldLogic;

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
                <HookShot
                    hookshot={hookshot}
                    addHookshot={addHookshot}
                    removeHookshot={removeHookshot}
                    longshot={longshot}
                    addLongshot={addLongshot}
                    removeLongshot={removeLongshot}
                />
                <IceArrows
                    iceArrows={iceArrows}
                    addIceArrows={addIceArrows}
                    removeIceArrows={removeIceArrows}
                />
                <FaroresWind
                    faroresWind={faroresWind}
                    addFaroresWind={addFaroresWind}
                    removeFaroresWind={removeFaroresWind}
                />
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