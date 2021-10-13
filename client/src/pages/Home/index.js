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
        emptyBottles: 0,
        walletCounter: 99,
        pieceOfHeartCounter: 0,
        heartContainerCounter: 0,
        forestKeys: 0,
        fireKeys: 0,
        waterKeys: 0,
        shadowKeys: 0,
        spiritKeys: 0,
        wellKeys: 0,
        fortressKeys: 0,
        trainingKeys: 0,
        ganonKeys: 0,
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
        hasMasterSword: true,
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
        hasKokiriEmerald: false,
        hasGoronRuby: false,
        hasZoraSapphire: false,
        hasLightMedallion: false,
        hasForestMedallion: false,
        hasFireMedallion: false,
        hasWaterMedallion: false,
        hasShadowMedallion: false,
        hasSpiritMedallion: false,
        hasForestBossKey: false,
        hasFireBossKey: false,
        hasWaterBossKey: false,
        hasShadowBossKey: false,
        hasSpiritBossKey: false,
        hasGanonBossKey: false
    }

    componentDidMount() {
        const trackerData = JSON.parse(window.localStorage.getItem("main"));
        this.setState(trackerData);
        console.log(trackerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("main", JSON.stringify(this.state));
    }

    smallKeyLogic = {
        addForestTempleKey: (e) => {
            this.setState(prevState => ({
                forestKeys: Math.min(5, prevState.forestKeys + 1)
            }));
        },
        removeForestTempleKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                forestKeys: Math.max(0, prevState.forestKeys - 1)
            }));
        }
    }

    bossKeyLogic = {
        addForestBossKey: (e) => {
            this.setState({ hasForestBossKey: true });
        },
        removeForestBossKey: (e) => {
            e.preventDefault();
            this.setState({ hasForestBossKey: false });
        },
        addFireBossKey: (e) => {
            this.setState({ hasFireBossKey: true });
        },
        removeFireBossKey: (e) => {
            e.preventDefault();
            this.setState({ hasFireBossKey: false });
        },
        addWaterBossKey: (e) => {
            this.setState({ hasWaterBossKey: true });
        },
        removeWaterBossKey: (e) => {
            e.preventDefault();
            this.setState({ hasWaterBossKey: false });
        },
        addShadowBossKey: (e) => {
            this.setState({ hasShadowBossKey: true });
        },
        removeShadowBossKey: (e) => {
            e.preventDefault();
            this.setState({ hasShadowBossKey: false });
        },
        addSpiritBossKey: (e) => {
            this.setState({ hasSpiritBossKey: true });
        },
        removeSpiritBossKey: (e) => {
            e.preventDefault();
            this.setState({ hasSpiritBossKey: false });
        },
        addGanonBossKey: (e) => {
            this.setState({ hasGanonBossKey: true });
        },
        removeGanonBossKey: (e) => {
            e.preventDefault();
            this.setState({ hasGanonBossKey: false });
        } 
    }

    medallionLogic = {
        addLightMedallion: (e) => {
            this.setState({ hasLightMedallion: true });
        },
        removeLightMedallion: (e) => {
            e.preventDefault();
            this.setState({ hasLightMedallion: false });
        },
        addForestMedallion: (e) => {
            this.setState({ hasForestMedallion: true });
        },
        removeForestMedallion: (e) => {
            e.preventDefault();
            this.setState({ hasForestMedallion: false });
        },
        addFireMedallion: (e) => {
            this.setState({ hasFireMedallion: true });
        },
        removeFireMedallion: (e) => {
            e.preventDefault();
            this.setState({ hasFireMedallion: false });
        },
        addWaterMedallion: (e) => {
            this.setState({ hasWaterMedallion: true });
        },
        removeWaterMedallion: (e) => {
            e.preventDefault();
            this.setState({ hasWaterMedallion: false });
        },
        addShadowMedallion: (e) => {
            this.setState({ hasShadowMedallion: true });
        },
        removeShadowMedallion: (e) => {
            e.preventDefault();
            this.setState({ hasShadowMedallion: false });
        },
        addSpiritMedallion: (e) => {
            this.setState({ hasSpiritMedallion: true });
        },
        removeSpiritMedallion: (e) => {
            e.preventDefault();
            this.setState({ hasSpiritMedallion: false });
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

    emptyBottleLogic = {
        addBottle: (e) => {
            this.setState(prevState => ({
                emptyBottles: Math.min(4, prevState.emptyBottles + 1)
            }));
        },
        removeBottle: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                emptyBottles: Math.max(0, prevState.emptyBottles - 1)
            }));
        }
    }

    kokiriSwordLogic = {
        gotKokiriSword: (e) => {
            this.setState({ hasKokiriSword: true });
        },
        removeKokiriSword: (e) => {
            e.preventDefault();
            this.setState({ hasKokiriSword: false });
        }
    }

    ocarinaLogic = {
        gotFairyOcarina: (e) => {
            this.setState({ hasOcarina: true });
            this.setState({ hasSongOfStorms: true });
        },
        removeFairyOcarina: (e) => {
            e.preventDefault();
            this.setState({ hasOcarina: false });
            this.setState({ hasSongOfStorms: false });
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
            this.setState({ hasLongshot: true });
        },
        removeLongshot: (e) => {
            e.preventDefault();
            this.setState({ hasLongshot: false });
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
                                        emptyBottles={this.emptyBottleLogic}
                                        kokiriSword={this.kokiriSwordLogic}
                                        ocarina={this.ocarinaLogic}
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
                                        bossKeys={this.bossKeyLogic}
                                        medallions={this.medallionLogic}
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