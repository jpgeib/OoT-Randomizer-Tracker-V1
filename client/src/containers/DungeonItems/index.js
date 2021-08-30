import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

class DungeonItems extends Component {
    render() {
        
        const { dungeons } = this.props;

        return (
            <Grid style={dungeons}>
                <Header as="h1">Dungeon Items</Header>
            </Grid>
        );
    }
}

export default DungeonItems;