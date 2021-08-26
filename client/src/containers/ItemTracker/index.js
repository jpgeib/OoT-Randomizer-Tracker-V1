import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class ItemTracker extends Component {
    render() {

        const { tracker } = this.props;

        return (
            <div style={tracker}>
                <Header as="h1">Item Tracker</Header>
            </div>
        );
    }
}

export default ItemTracker;