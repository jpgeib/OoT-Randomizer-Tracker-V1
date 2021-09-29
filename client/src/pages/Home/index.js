import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ItemTracker from "../../containers/ItemTracker";
import DungeonItemTracker from "../../containers/DungeonItemTracker";
import LocationList from "../../containers/LocationList";

class Home extends Component {

    state = {
        skulltulaCounter: 0,
        hasSkulltula: false,
        has10Skulltulas: false,
        has20Skulltulas: false,
        has30Skulltulas: false,
        has40Skulltulas: false,
        has50Skulltulas: false,
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

    skulltulaLogic = {
        addSkulltula: (e) => {
            this.setState(prevState => ({
                skulltulaCounter: Math.min(100, prevState.skulltulaCounter + 1)
            }));
        },
        removeSkulltula: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                skulltulaCounter: Math.max(0, prevState.skulltulaCounter - 1)
            }));
        }
    }

    hookshotLogic = {
        gotHookshot: (e) => {
            this.setState({ hasHookshot: true });
            this.setState({ notFound: false });
        },
        removeHookshot: (e) => {
            e.preventDefault();
            this.setState({ hasHookshot: false });
            this.setState({ notFound: true });
        },
        gotLongshot: (e) => {
            this.setState({ hasLongshot: true })
        },
        removeLongshot: (e) => {
            e.preventDefault();
            this.setState({ hasLongshot: false })
        }
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
                                        hookshot={this.hookshotLogic}
                                        skulltulas={this.skulltulaLogic}
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