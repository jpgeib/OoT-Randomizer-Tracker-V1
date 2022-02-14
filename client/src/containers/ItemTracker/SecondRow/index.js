import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BigGoronSword from "../../../components/Items/BigGoronSword";
import FairySlingshot from "../../../components/Items/FairySlingshot";
import FairyOcarina from "../../../components/Items/FairyOcarina";
import OcarinaOfTime from "../../../components/Items/OcarinaOfTime";
import Bombchus from "../../../components/Items/Bombchus";
import HookShot from "../../../components/Items/HookShot";
import LongShot from "../../../components/Items/LongShot";
import IceArrows from "../../../components/Items/IceArrows";
import FaroresWind from "../../../components/Items/FaroresWind";
import DekuShield from "../../../components/Items/DekuShield";

class SecondRow extends Component {

    render() {

        const { hasLongshot, hasHookshot, hasOcarina, hasOcarinaOfTime } = this.props.state;
        const { gotHookshot, removeHookshot, gotLongshot, removeLongshot } = this.props.hookshot;
        const { gotFairyOcarina, removeFairyOcarina, gotOcarinaOfTime, removeOcarinaOfTime } = this.props.ocarina;
        // const { fairyOcarina, addFairyOcarina, removeFairyOcarina } = this.props;

        return (
            <Grid.Row>
                <BigGoronSword />
                <FairySlingshot />
                {hasOcarinaOfTime === true ? 
                    <OcarinaOfTime 
                        removeOcarinaOfTime={removeOcarinaOfTime}
                    /> :
                    <FairyOcarina
                    hasOcarina={hasOcarina}
                    gotFairyOcarina={gotFairyOcarina}
                    removeFairyOcarina={removeFairyOcarina}
                    hasOcarinaOfTime={hasOcarinaOfTime}
                    gotOcarinaOfTime={gotOcarinaOfTime}
                    // fairyOcarina={fairyOcarina}
                    // addFairyOcarina={addFairyOcarina}
                    // removeFairyOcarina={removeFairyOcarina}
                />}
                <Bombchus />
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
                <DekuShield />
            </Grid.Row>
        );
    }

}

export default SecondRow;