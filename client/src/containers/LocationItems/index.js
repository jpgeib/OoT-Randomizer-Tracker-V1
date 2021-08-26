import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class LocationItems extends Component {
    render() {

        const { items } = this.props;

        return (
            <div style={items}>
                <Header as="h1">List of Items per Location</Header>
            </div>
        );
    }
}

export default LocationItems;