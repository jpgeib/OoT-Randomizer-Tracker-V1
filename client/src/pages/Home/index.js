import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ItemTracker from "../../containers/ItemTracker";
import DungeonItemTracker from "../../containers/DungeonItemTracker";
import LocationList from "../../containers/LocationList";

// import { connect } from "react-redux";
// import { compose } from "redux";
// import { addFairyOcarina, removeFairyOcarina } from "../../actions/ocarinas";

class Home extends Component {

    state = {
        items: {
            skulltulaCounter: 0,
            hasHookshot: false,
            hasLongshot: false,
            smallKeys: {
                forestTemple: 0
            }
        },
        locations: {
            obtainedItem: false
        }
    }

    async componentDidMount() {
        const trackerData = JSON.parse(window.localStorage.getItem("state"));
        this.setState(trackerData);
        console.log(trackerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("state", JSON.stringify(this.state));
    }

    itemLogic = {
        obtainItem: (e) => {
            this.setState({ obtainedItem: true });
        },
        unobtainItem: (e) => {
            e.preventDefault();
            this.setState({ obtainedItem: false });
        }
    }

    smallKeyLogic = {
        addForestTempleKey: (e) => {
            this.setState(prevState => ({
                forestTemple: Math.min(100, prevState.smallKeys.forestTemple + 1)
            }));
        },
        removeForestTempleKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                forestTemple: Math.max(0, prevState.smallKeys.forestTemple - 1)
            }));
        }
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
        },
        removeHookshot: (e) => {
            e.preventDefault();
            this.setState({ hasHookshot: false });
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
        // const { fairyOcarina, addFairyOcarina, removeFairyOcarina } = this.props;

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
                                    <DungeonItemTracker 
                                        dungeons={dungeonStyle}
                                        state={this.state}
                                        smallKeys={this.smallKeyLogic} 
                                    />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Grid.Row>
                            <Grid.Column>
                                <LocationList
                                    state={this.state}
                                    locations={locationStyle}
                                    items={this.itemLogic}
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

// function mapStateToProps(state) {
//     return { fairyOcarina: state.ocarinas }
// };

export default (Home);