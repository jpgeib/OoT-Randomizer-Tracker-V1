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
        addForestKey: (e) => {
            this.setState(prevState => ({
                forestKeys: Math.min(5, prevState.forestKeys + 1)
            }));
        },
        removeForestKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                forestKeys: Math.max(0, prevState.forestKeys - 1)
            }));
        },
        addFireKey: (e) => {
            this.setState(prevState => ({
                fireKeys: Math.min(8, prevState.fireKeys + 1)
            }));
        },
        removeFireKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                fireKeys: Math.max(0, prevState.fireKeys - 1)
            }));
        },
        addWaterKey: (e) => {
            this.setState(prevState => ({
                waterKeys: Math.min(6, prevState.waterKeys + 1)
            }));
        },
        removeWaterKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                waterKeys: Math.max(0, prevState.waterKeys - 1)
            }));
        },
        addShadowKey: (e) => {
            this.setState(prevState => ({
                shadowKeys: Math.min(5, prevState.shadowKeys + 1)
            }));
        },
        removeShadowKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                shadowKeys: Math.max(0, prevState.shadowKeys - 1)
            }));
        },
        addSpiritKey: (e) => {
            this.setState(prevState => ({
                spiritKeys: Math.min(5, prevState.spiritKeys + 1)
            }));
        },
        removeSpiritKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                spiritKeys: Math.max(0, prevState.spiritKeys - 1)
            }));
        },
        addWellKey: (e) => {
            this.setState(prevState => ({
                wellKeys: Math.min(3, prevState.wellKeys + 1)
            }));
        },
        removeWellKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                wellKeys: Math.max(0, prevState.wellKeys - 1)
            }));
        },
        addFortressKey: (e) => {
            this.setState(prevState => ({
                fortressKeys: Math.min(4, prevState.fortressKeys + 1)
            }));
        },
        removeFortressKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                fortressKeys: Math.max(0, prevState.fortressKeys - 1)
            }));
        },
        addTrainingKey: (e) => {
            this.setState(prevState => ({
                trainingKeys: Math.min(9, prevState.trainingKeys + 1)
            }));
            console.log("It works!");
        },
        removeTrainingKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                trainingKeys: Math.max(0, prevState.trainingKeys - 1)
            }));
            console.log("It also works!");
        },
        addGanonKey: (e) => {
            this.setState(prevState => ({
                ganonKeys: Math.min(2, prevState.ganonKeys + 1)
            }));
            console.log("It works!");
        },
        removeGanonKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                ganonKeys: Math.max(0, prevState.ganonKeys - 1)
            }));
            console.log("It also works!");
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

    jewelLogic = {
        addKokiriEmerald: (e) => {
            this.setState({ hasKokiriEmerald: true });
        },
        removeKokiriEmerald: (e) => {
            e.preventDefault();
            this.setState({ hasKokiriEmerald: false });
        },
        addGoronRuby: (e) => {
            this.setState({ hasGoronRuby: true });
        },
        removeGoronRuby: (e) => {
            e.preventDefault();
            this.setState({ hasGoronRuby: false });
        },
        addZoraSapphire: (e) => {
            this.setState({ hasZoraSapphire: true });
        },
        removeZoraSapphire: (e) => {
            e.preventDefault();
            this.setState({ hasZoraSapphire: false });
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
                                        tracker={trackerStyle}
                                        state={this.state}
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
                                        jewels={this.jewelLogic}
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
                                    locations={locationStyle}
                                    state={this.state}
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