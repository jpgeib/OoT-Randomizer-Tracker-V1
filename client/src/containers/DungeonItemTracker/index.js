import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import FireTempleItems from "../Modals/DungeonItemModals/FireTempleItems";
import ForestTempleItems from "../Modals/DungeonItemModals/ForestTempleItems";

class DungeonItemTracker extends Component {
    render() {

        const { dungeons } = this.props;

        return (
            <Grid style={dungeons}>
                <Grid.Row centered>
                    <Grid.Column width={2}>

                    </Grid.Column>
                    <Grid.Column width={2}>
                        
                    </Grid.Column>
                    <Grid.Column width={2}>
                        
                    </Grid.Column>
                    <Grid.Column width={2}>
                        
                    </Grid.Column>
                    <Grid.Column width={2}>
                        
                    </Grid.Column>
                    <Grid.Column width={2}>
                        
                    </Grid.Column>
                    <Grid.Column width={2}>
                        
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={2}>
                        <ForestTempleItems />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <FireTempleItems />
                    </Grid.Column>
                    <Grid.Column width={2}>

                    </Grid.Column>
                    <Grid.Column width={2}>

                    </Grid.Column>
                    <Grid.Column width={2}>

                    </Grid.Column>
                    <Grid.Column width={2}>

                    </Grid.Column>
                    <Grid.Column width={2}>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default DungeonItemTracker;