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
            tracker,
            counterStyle,
            firstRowLogic,
            secondRowLogic,
            thirdRowLogic,
            fourthRowLogic,
            fifthRowLogic,
            sixthRowLogic
        } = this.props;

        return (
            <Grid style={tracker}>
                <FirstRow firstRowLogic={firstRowLogic} counterStyle={counterStyle} />
                <SecondRow secondRowLogic={secondRowLogic} />
                <ThirdRow thirdRowLogic={thirdRowLogic} />
                <FourthRow fourthRowLogic={fourthRowLogic} />
                <FifthRow fifthRowLogic={fifthRowLogic} />
                <SixthRow sixthRowLogic={sixthRowLogic} />
            </Grid>
        );
    }
}

export default ItemTracker;