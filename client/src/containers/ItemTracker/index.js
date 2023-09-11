import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { items } from "../../items";
import Item from "../../components/Item";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import SixthRow from "./SixthRow";
import MasterSword from "../../components/Items/MasterSword";
import HookShot from "../../components/Items/HookShot";

class ItemTracker extends Component {

    handleAddItem = (id, name) => {
        this.props.inventoryLogic.addItem(id, name);
    }

    handleRemoveItem = (id, name) => {
        this.props.inventoryLogic.removeItem(id, name);
    }

    render() {

        const {
            tracker,
            // counterStyle,
            // firstRowLogic,
            // secondRowLogic,
            // thirdRowLogic,
            // fourthRowLogic,
            // fifthRowLogic,
            // sixthRowLogic,
            inventoryLogic,
        } = this.props;

        let itemList = items.map(item => {
            return (
                <Grid.Column width={2} key={item.id}>
                    <Item 
                        item={item} 
                        addItem={() => this.handleAddItem(item.id, item.name)}
                        removeItem={() => this.handleRemoveItem(item.id, item.name)}
                    />
                </Grid.Column>
            );
        })
        return (
            <Grid style={tracker}>
                <Grid.Row>
                    {itemList}
                </Grid.Row>
                {/* <FirstRow inventoryLogic={inventoryLogic} firstRowLogic={firstRowLogic} counterStyle={counterStyle} />
                <SecondRow secondRowLogic={secondRowLogic} />
                <ThirdRow thirdRowLogic={thirdRowLogic} />
                <FourthRow fourthRowLogic={fourthRowLogic} />
                <FifthRow fifthRowLogic={fifthRowLogic} />
                <SixthRow sixthRowLogic={sixthRowLogic} /> */}
            </Grid>
        );
    }
}

export default ItemTracker;