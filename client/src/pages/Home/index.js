import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ItemTracker from "../../containers/ItemTracker";
import DungeonItems from "../../containers/DungeonItems";
import LocationItems from "../../containers/LocationItems";
import LocationList from "../../containers/LocationList";

class Home extends Component {
    render() {

        const { trackerStyle, itemStyle, locationStyle, dungeonStyle } = this.props.styles;

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={11}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <ItemTracker tracker={trackerStyle} />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={10}>
                                    <DungeonItems dungeons={dungeonStyle} />
                                </Grid.Column>
                                <Grid.Column width={6}>
                                     <LocationItems items={itemStyle} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                <LocationList locations={locationStyle} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;