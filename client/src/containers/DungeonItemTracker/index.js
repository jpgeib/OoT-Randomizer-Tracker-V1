import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ForestTempleItems from "../Modals/DungeonItemModals/ForestTempleItems";

class DungeonItemTracker extends Component {
    render() {
        
        const { dungeons } = this.props;

        return (
            <Grid style={dungeons}>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <ForestTempleItems />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default DungeonItemTracker;