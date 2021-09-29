import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ItemTracker from "../../containers/ItemTracker";
import DungeonItemTracker from "../../containers/DungeonItemTracker";
import LocationList from "../../containers/LocationList";

class Home extends Component {

    state = {
        hasHookshot: false,
        hasLongshot: false,
        notFound: true
    }

    componentDidMount() {
        const trackerData = JSON.parse(window.localStorage.getItem("state"));
        this.setState(trackerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("state", JSON.stringify(this.state));
    }

    gotHookshot = (e) => {
        this.setState({ hasHookshot: true });
        this.setState({ notFound: false });
    }

    removeHookshot = (e) => {
        e.preventDefault();
        this.setState({ hasHookshot: false });
        this.setState({ notFound: true });
    }

    gotLongshot = (e) => {
        this.setState({ hasLongshot: true })
    }

    removeLongshot = (e) => {
        e.preventDefault();
        this.setState({ hasLongshot: false })
    }

    render() {

        const { trackerStyle, locationStyle, dungeonStyle } = this.props.styles;

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <ItemTracker 
                                        state={this.state} 
                                        tracker={trackerStyle}
                                        gotHookshot={this.gotHookshot}
                                        removeHookshot={this.removeHookshot}
                                        gotLongshot={this.gotLongshot}
                                        removeLongshot={this.removeLongshot}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <DungeonItemTracker dungeons={dungeonStyle} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Grid.Row>
                            <Grid.Column>
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