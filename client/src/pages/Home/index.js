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
        skulltulaCounter: 0,
        dekuStickCounter: 0,
        dekuNutCounter: 0,
        bombCounter: 0,
        fairyBowCounter: 0,
        fairySlingshotCounter: 0,
        beanCounter: 0,
        bottleCounter: 0,
        walletCounter: 99,
        pieceOfHeartCounter: 0,
        heartContainerCounter: 0,
        hasKokiriTunic: true,
        hasGoronTunic: false,
        hasZoraTunic: false,
        hasKokiriBoots: true,
        hasIronBoots: false,
        hasHoverBoots: false,
        hasFireArrows: false,
        hasIceArrows: false,
        hasLightArrows: false,
        hasDinsFire: false,
        hasFaroresWind: false,
        hasNayrusLove: false,
        hasKokiriSword: false,
        hasMasterSword: false,
        hasBigGoronSword: false,
        hasOcarina: false,
        hasBombchus: false,
        hasHookshot: false,
        hasLongshot: false,
        hasDekuShield: false,
        hasHylianShield: false,
        hasMirrorShield: false,
        hasBoomerang: false,
        hasLensOfTruth: false,
        hasMegatonHammer: false,
        hasRutosLetter: false,
        hasMalonsEgg: false,
        hasPocketCucco: false,
        hasZeldasLetter: false,
        hasClaimCheck: false,
        hasSilverScale: false,
        hasGoldenScale: false,
        hasMagic: false,
        hasGoronBracelet: false,
        hasSilverGauntlets: false,
        hasGoldenGauntlets: false,
        hasGerudoCard: false,
        hasStoneOfAgony: false,
        hasDoubleDefense: false,
        hasZeldasLullaby: false,
        hasEponasSong: false,
        hasSariasSong: false,
        hasSunsSong: false,
        hasSongOfTime: false,
        hasSongOfStorms: false,
        hasScarecrowSong: false,
        hasPrelude: false,
        hasMinuet: false,
        hasBolero: false,
        hasSerenade: false,
        hasNocturne: false,
        hasRequiem: false,
        obtainedItem: false
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