import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ItemTracker from "../../containers/ItemTracker";
import LocationItems from "../../containers/LocationItems";
import LocationList from "../../containers/LocationList";

class Home extends Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column>
                                    <ItemTracker />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                     <LocationItems />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <LocationList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Home;