import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import KokiriForest from "../../components/KokiriForest";

class LocationItems extends Component {
    render() {

        const { items } = this.props;

        return (
            <Grid style={items}>
                <KokiriForest />
            </Grid>
        );
    }
}

export default LocationItems;