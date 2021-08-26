import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class LocationList extends Component {
    render() {

        const { locations } = this.props;
        return (
            <div style={locations}>
                <Header as="h1">List of Locations</Header>
            </div>
        );
    }
}

export default LocationList;