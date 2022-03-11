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
            hookshot,
            addHookshot,
            removeHookshot,
            longshot,
            addLongshot,
            removeLongshot,
            iceArrows,
            addIceArrows,
            removeIceArrows,
            faroresWind,
            addFaroresWind,
            removeFaroresWind,
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