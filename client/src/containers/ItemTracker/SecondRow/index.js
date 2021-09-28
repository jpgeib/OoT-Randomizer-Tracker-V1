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

    state = {
        hasHookshot: false,
        hasLongshot: false,
        notFound: true
    }

    gotHookshot = (e) => {
        this.setState({ hasHookshot: true });
        this.setState({ notFound: false });
    }

    removeHookshot = (e) => {
        e.preventDefault();
        this.setState({ hasHookshot: false });
        this.setState({ notFound: true });
    }

    gotLongshot = (e) => {
        this.setState({ hasLongshot: true })
    }

    removeLongshot = (e) => {
        e.preventDefault();
        this.setState({ hasLongshot: false })
    }

    render() {

        const { hasLongshot, hasHookshot, notFound } = this.state;

        return (
            <Grid.Row>
                <BigGoronSword />
                <FairySlingshot />
                <FairyOcarina />
                <Bombchus />
                {hasLongshot === true ?
                    <LongShot
                        hasLongshot={hasLongshot}
                        removeLongshot={this.removeLongshot}
                    /> :
                    <HookShot
                        hasLongshot={hasLongshot}
                        gotLongshot={this.gotLongshot}
                        gotHookshot={this.gotHookshot}
                        removeHookshot={this.removeHookshot}
                        hasHookshot={hasHookshot}
                        notFound={notFound} />}
                <IceArrows />
                <FaroresWind />
                <DekuShield />
            </Grid.Row>
        );
    }

}

export default SecondRow;