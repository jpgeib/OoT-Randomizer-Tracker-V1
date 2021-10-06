import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import BigGoronSword from "../../../components/Items/BigGoronSword";
import FairySlingshot from "../../../components/Items/FairySlingshot";
import FairyOcarina from "../../../components/Items/FairyOcarina";
import Bombchus from "../../../components/Items/Bombchus";
import HookShot from "../../../components/Items/HookShot";
import LongShot from "../../../components/Items/LongShot";
import IceArrows from "../../../components/Items/IceArrows";
import FaroresWind from "../../../components/Items/FaroresWind";
import DekuShield from "../../../components/Items/DekuShield";

class SecondRow extends Component {

    render() {

        const { hasLongshot, hasHookshot, hasOcarina } = this.props.state;
        const { gotHookshot, removeHookshot, gotLongshot, removeLongshot } = this.props.hookshot;
        const { gotFairyOcarina, removeFairyOcarina } = this.props.ocarina;
        // const { fairyOcarina, addFairyOcarina, removeFairyOcarina } = this.props;

        return (
            <Grid.Row>
                <BigGoronSword />
                <FairySlingshot />
                <FairyOcarina
                    hasOcarina={hasOcarina}
                    gotFairyOcarina={gotFairyOcarina}
                    removeFairyOcarina={removeFairyOcarina} 
                    // fairyOcarina={fairyOcarina}
                    // addFairyOcarina={addFairyOcarina}
                    // removeFairyOcarina={removeFairyOcarina}
                />
                <Bombchus />
                {hasLongshot === true ?
                    <LongShot
                        hasLongshot={hasLongshot}
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