import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import ItemTracker from "../../containers/ItemTracker";
import DungeonItemTracker from "../../containers/DungeonItemTracker";
import LocationList from "../../containers/LocationList";

import { connect } from "react-redux";
import { compose } from "redux";

import {
    addDekuSticks, removeDekuSticks, addDekuNuts, removeDekuNuts,
    addBombs, removeBombs, addFairyBow, removeFairyBow,
    addFireArrows, removeFireArrows, addDinsFire, removeDinsFire,
    addKokiriSword, removeKokiriSword
} from "../../actions/firstRow";
import {
    addBiggoronSword, removeBiggoronSword, addFairySlingshot, removeFairySlingshot,
    addFairyOcarina, removeFairyOcarina, addOcarinaOfTime, removeOcarinaOfTime,
    addBombchus, removeBombchus, addHookshot, removeHookshot,
    addLongshot, removeLongshot, addIceArrows, removeIceArrows,
    addFaroresWind, removeFaroresWind, addDekuShield, removeDekuShield
} from "../../actions/secondRow";
import {
    addHylianShield, removeHylianShield, addMirrorShield, removeMirrorShield,
    addBoomerang, removeBoomerang, addLensOfTruth, removeLensOfTruth,
    addMagicBeans, removeMagicBeans, addMegatonHammer, removeMegatonHammer,
    addLightArrows, removeLightArrows, addNayrusLove, removeNayrusLove
} from "../../actions/thirdRow";
import {
    addGoronTunic, removeGoronTunic, addZoraTunic, removeZoraTunic,
    addWallet, removeWallet, addSkulltula, removeSkulltula,
    addEmptyBottle, removeEmptyBottle, addRutosLetter, removeRutosLetter,
    addWeirdEgg, removeWeirdEgg, addCucco, removeCucco,
    addZeldasLetter, removeZeldasLetter, addKeatonMask, removeKeatonMask,
    addSkullMask, removeSkullMask, addSpookyMask, removeSpookyMask,
    addBunnyHood, removeBunnyHood, addMaskOfTruth, removeMaskOfTruth
} from "../../actions/fourthRow";
import {
    addIronBoots, removeIronBoots, addHoverBoots, removeHoverBoots,
    addSilverScale, removeSilverScale, addGoldenScale, removeGoldenScale,
    addMagic, removeMagic, addDoubleMagic, removeDoubleMagic,
    addGoronsBracelet, removeGoronsBracelet, addSilverGauntlets, removeSilverGauntlets,
    addGoldenGauntlets, removeGoldenGauntlets, addGerudoCard, removeGerudoCard,
    addPocketEgg, removePocketEgg, addPocketCucco, removePocketCucco,
    addCojiro, removeCojiro, addOddMushroom, removeOddMushroom,
    addOddPotion, removeOddPotion, addPoachersSaw, removePoachersSaw,
    addBrokenGoronsSword, removeBrokenGoronsSword, addPrescription, removePrescription,
    addEyeballFrog, removeEyeballFrog, addEyeDrops, removeEyeDrops,
    addClaimCheck, removeClaimCheck
} from "../../actions/fifthRow";
import {
    addStoneOfAgony, removeStoneOfAgony, addPieceOfHeart, removePieceOfHeart,
    addHeartContainer, removeHeartContainer, addDoubleDefense, removeDoubleDefense
} from "../../actions/sixthRow";
import {
    addKokiriEmerald, removeKokiriEmerald, addGoronRuby, removeGoronRuby,
    addZoraSapphire, removeZoraSapphire, addLightMedallion, removeLightMedallion,
    addForestMedallion, removeForestMedallion, addFireMedallion, removeFireMedallion,
    addWaterMedallion, removeWaterMedallion, addShadowMedallion, removeShadowMedallion,
    addSpiritMedallion, removeSpiritMedallion, addForestBossKey, removeForestBossKey,
    addFireBossKey, removeFireBossKey, addWaterBossKey, removeWaterBossKey,
    addShadowBossKey, removeShadowBossKey, addSpiritBossKey, removeSpiritBossKey,
    addGanonBossKey, removeGanonBossKey,
} from "../../actions/dungeonItems";

class Home extends Component {

    state = {
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
        hasKokiriBoots: true,
        hasMasterSword: true,
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
        // console.log(trackerData);
    }

    componentDidUpdate() {
        window.localStorage.setItem("main", JSON.stringify(this.state));
    }

    //Dungeon Item Logic

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
        },
        removeTrainingKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                trainingKeys: Math.max(0, prevState.trainingKeys - 1)
            }));
        },
        addGanonKey: (e) => {
            this.setState(prevState => ({
                ganonKeys: Math.min(2, prevState.ganonKeys + 1)
            }));
        },
        removeGanonKey: (e) => {
            e.preventDefault();
            this.setState(prevState => ({
                ganonKeys: Math.max(0, prevState.ganonKeys - 1)
            }));
        }
    }

    // bossKeyLogic = {
    //     addForestBossKey: (e) => {
    //         this.setState({ hasForestBossKey: true });
    //     },
    //     removeForestBossKey: (e) => {
    //         e.preventDefault();
    //         this.setState({ hasForestBossKey: false });
    //     },
    //     addFireBossKey: (e) => {
    //         this.setState({ hasFireBossKey: true });
    //     },
    //     removeFireBossKey: (e) => {
    //         e.preventDefault();
    //         this.setState({ hasFireBossKey: false });
    //     },
    //     addWaterBossKey: (e) => {
    //         this.setState({ hasWaterBossKey: true });
    //     },
    //     removeWaterBossKey: (e) => {
    //         e.preventDefault();
    //         this.setState({ hasWaterBossKey: false });
    //     },
    //     addShadowBossKey: (e) => {
    //         this.setState({ hasShadowBossKey: true });
    //     },
    //     removeShadowBossKey: (e) => {
    //         e.preventDefault();
    //         this.setState({ hasShadowBossKey: false });
    //     },
    //     addSpiritBossKey: (e) => {
    //         this.setState({ hasSpiritBossKey: true });
    //     },
    //     removeSpiritBossKey: (e) => {
    //         e.preventDefault();
    //         this.setState({ hasSpiritBossKey: false });
    //     },
    //     addGanonBossKey: (e) => {
    //         this.setState({ hasGanonBossKey: true });
    //     },
    //     removeGanonBossKey: (e) => {
    //         e.preventDefault();
    //         this.setState({ hasGanonBossKey: false });
    //     }
    // }

    render() {

        const { trackerStyle, locationStyle, dungeonStyle } = this.props.styles;

        const firstRowLogic = {
            dekuSticksLogic: {
                dekuSticks: this.props.dekuSticks,
                addDekuSticks: this.props.addDekuSticks,
                removeDekuSticks: this.props.removeDekuSticks
            },
            dekuNutsLogic: {
                dekuNuts: this.props.dekuNuts,
                addDekuNuts: this.props.addDekuNuts,
                removeDekuNuts: this.props.removeDekuNuts
            },
            bombsLogic: {
                bombs: this.props.bombs,
                addBombs: this.props.addBombs,
                removeBombs: this.props.removeBombs
            },
            fairyBowLogic: {
                fairyBow: this.props.fairyBow,
                addFairyBow: this.props.addFairyBow,
                removeFairyBow: this.props.removeFairyBow
            },
            fireArrowLogic: {
                fireArrows: this.props.fireArrows,
                addFireArrows: this.props.addFireArrows,
                removeFireArrows: this.props.removeFireArrows
            },
            dinsFireLogic: {
                dinsFire: this.props.dinsFire,
                addDinsFire: this.props.addDinsFire,
                removeDinsFire: this.props.removeDinsFire
            },
            kokiriSwordLogic: {
                kokiriSword: this.props.kokiriSword,
                addKokiriSword: this.props.addKokiriSword,
                removeKokiriSword: this.props.removeKokiriSword
            }
        };

        const secondRowLogic = {
            biggoronSwordLogic: {
                biggoronSword: this.props.biggoronSword,
                addBiggoronSword: this.props.addBiggoronSword,
                removeBiggoronSword: this.props.removeBiggoronSword
            },
            fairySlingshotLogic: {
                fairySlingshot: this.props.fairySlingshot,
                addFairySlingshot: this.props.addFairySlingshot,
                removeFairySlingshot: this.props.removeFairySlingshot
            },
            ocarinaLogic: {
                fairyOcarina: this.props.fairyOcarina,
                addFairyOcarina: this.props.addFairyOcarina,
                removeFairyOcarina: this.props.removeFairyOcarina,
                ocarinaOfTime: this.props.ocarinaOfTime,
                addOcarinaOfTime: this.props.addOcarinaOfTime,
                removeOcarinaOfTime: this.props.removeOcarinaOfTime
            },
            bombchusLogic: {
                bombchus: this.props.bombchus,
                addBombchus: this.props.addBombchus,
                removeBombchus: this.props.removeBombchus
            },
            hookshotLogic: {
                hookshot: this.props.hookshot,
                addHookshot: this.props.addHookshot,
                removeHookshot: this.props.removeHookshot,
                longshot: this.props.longshot,
                addLongshot: this.props.addLongshot,
                removeLongshot: this.props.removeLongshot
            },
            iceArrowLogic: {
                iceArrows: this.props.iceArrows,
                addIceArrows: this.props.addIceArrows,
                removeIceArrows: this.props.removeIceArrows
            },
            faroresWindLogic: {
                faroresWind: this.props.faroresWind,
                addFaroresWind: this.props.addFaroresWind,
                removeFaroresWind: this.props.removeFaroresWind
            },
            dekuShieldLogic: {
                dekuShield: this.props.dekuShield,
                addDekuShield: this.props.addDekuShield,
                removeDekuShield: this.props.removeDekuShield
            }
        };

        const thirdRowLogic = {
            hylianShieldLogic: {
                hylianShield: this.props.hylianShield,
                addHylianShield: this.props.addHylianShield,
                removeHylianShield: this.props.removeHylianShield
            },
            mirrorShieldLogic: {
                mirrorShield: this.props.mirrorShield,
                addMirrorShield: this.props.addMirrorShield,
                removeMirrorShield: this.props.removeMirrorShield
            },
            boomerangLogic: {
                boomerang: this.props.boomerang,
                addBoomerang: this.props.addBoomerang,
                removeBoomerang: this.props.removeBoomerang
            },
            lensOfTruthLogic: {
                lensOfTruth: this.props.lensOfTruth,
                addLensOfTruth: this.props.addLensOfTruth,
                removeLensOfTruth: this.props.removeLensOfTruth
            },
            magicBeansLogic: {
                magicBeans: this.props.magicBeans,
                addMagicBeans: this.props.addMagicBeans,
                removeMagicBeans: this.props.removeMagicBeans
            },
            megatonHammerLogic: {
                megatonHammer: this.props.megatonHammer,
                addMegatonHammer: this.props.addMegatonHammer,
                removeMegatonHammer: this.props.removeMegatonHammer
            },
            lightArrowLogic: {
                lightArrows: this.props.lightArrows,
                addLightArrows: this.props.addLightArrows,
                removeLightArrows: this.props.removeLightArrows
            },
            nayrusLoveLogic: {
                nayrusLove: this.props.nayrusLove,
                addNayrusLove: this.props.addNayrusLove,
                removeNayrusLove: this.props.removeNayrusLove
            }
        };

        const fourthRowLogic = {
            goronTunicLogic: {
                goronTunic: this.props.goronTunic,
                addGoronTunic: this.props.addGoronTunic,
                removeGoronTunic: this.props.removeGoronTunic
            },
            zoraTunicLogic: {
                zoraTunic: this.props.zoraTunic,
                addZoraTunic: this.props.addZoraTunic,
                removeZoraTunic: this.props.removeZoraTunic
            },
            walletLogic: {
                wallet: this.props.wallet,
                addWallet: this.props.addWallet,
                removeWallet: this.props.removeWallet
            },
            skulltulasLogic: {
                skulltulas: this.props.skulltulas,
                addSkulltula: this.props.addSkulltula,
                removeSkulltula: this.props.removeSkulltula
            },
            emptyBottlesLogic: {
                emptyBottles: this.props.emptyBottles,
                addEmptyBottle: this.props.addEmptyBottle,
                removeEmptyBottle: this.props.removeEmptyBottle
            },
            rutosLetterLogic: {
                rutosLetter: this.props.rutosLetter,
                addRutosLetter: this.props.addRutosLetter,
                removeRutosLetter: this.props.removeRutosLetter
            },
            pastTradeLogic: {
                weirdEggLogic: {
                    weirdEgg: this.props.weirdEgg,
                    addWeirdEgg: this.props.addWeirdEgg,
                    removeWeirdEgg: this.props.removeWeirdEgg
                },
                cuccoLogic: {
                    cucco: this.props.cucco,
                    addCucco: this.props.addCucco,
                    removeCucco: this.props.removeCucco
                },
                zeldasLetterLogic: {
                    zeldasLetter: this.props.zeldasLetter,
                    addZeldasLetter: this.props.addZeldasLetter,
                    removeZeldasLetter: this.props.removeZeldasLetter
                },
                keatonMaskLogic: {
                    keatonMask: this.props.keatonMask,
                    addKeatonMask: this.props.addKeatonMask,
                    removeKeatonMask: this.props.removeKeatonMask
                },
                skullMaskLogic: {
                    skullMask: this.props.skullMask,
                    addSkullMask: this.props.addSkullMask,
                    removeSkullMask: this.props.removeSkullMask
                },
                spookyMaskLogic: {
                    spookyMask: this.props.spookyMask,
                    addSpookyMask: this.props.addSpookyMask,
                    removeSpookyMask: this.props.removeSpookyMask,
                },
                bunnyHoodLogic: {
                    bunnyHood: this.props.bunnyHood,
                    addBunnyHood: this.props.addBunnyHood,
                    removeBunnyHood: this.props.removeBunnyHood
                },
                maskOfTruthLogic: {
                    maskOfTruth: this.props.maskOfTruth,
                    addMaskOfTruth: this.props.addMaskOfTruth,
                    removeMaskOfTruth: this.props.removeMaskOfTruth
                }
            }
        };

        const fifthRowLogic = {
            ironBootsLogic: {
                ironBoots: this.props.ironBoots,
                addIronBoots: this.props.addIronBoots,
                removeIronBoots: this.props.removeIronBoots
            },
            hoverBootsLogic: {
                hoverBoots: this.props.hoverBoots,
                addHoverBoots: this.props.addHoverBoots,
                removeHoverBoots: this.props.removeHoverBoots
            },
            zoraScaleLogic: {
                silverScale: this.props.silverScale,
                addSilverScale: this.props.addSilverScale,
                removeSilverScale: this.props.removeSilverScale,
                goldenScale: this.props.goldenScale,
                addGoldenScale: this.props.addGoldenScale,
                removeGoldenScale: this.props.removeGoldenScale
            },
            magicLogic: {
                magic: this.props.magic,
                addMagic: this.props.addMagic,
                removeMagic: this.props.removeMagic,
                doubleMagic: this.props.doubleMagic,
                addDoubleMagic: this.props.addDoubleMagic,
                removeDoubleMagic: this.props.removeDoubleMagic
            },
            strengthEnhancerLogic: {
                goronsBracelet: this.props.goronsBracelet,
                addGoronsBracelet: this.props.addGoronsBracelet,
                removeGoronsBracelet: this.props.removeGoronsBracelet,
                silverGauntlets: this.props.silverGauntlets,
                addSilverGauntlets: this.props.addSilverGauntlets,
                removeSilverGauntlets: this.props.removeSilverGauntlets,
                goldenGauntlets: this.props.goldenGauntlets,
                addGoldenGauntlets: this.props.addGoldenGauntlets,
                removeGoldenGauntlets: this.props.removeGoldenGauntlets
            },
            gerudoCardLogic: {
                gerudoCard: this.props.gerudoCard,
                addGerudoCard: this.props.addGerudoCard,
                removeGerudoCard: this.props.removeGerudoCard
            },
            futureTradeLogic: {
                pocketEggLogic: {
                    pocketEgg: this.props.pocketEgg,
                    addPocketEgg: this.props.addPocketEgg,
                    removePocketEgg: this.props.removePocketEgg
                },
                pocketCuccoLogic: {
                    pocketCucco: this.props.pocketCucco,
                    addPocketCucco: this.props.addPocketCucco,
                    removePocketCucco: this.props.removePocketCucco
                },
                cojiroLogic: {
                    cojiro: this.props.cojiro,
                    addCojiro: this.props.addCojiro,
                    removeCojiro: this.props.removeCojiro
                },
                oddMushroomLogic: {
                    oddMushroom: this.props.oddMushroom,
                    addOddMushroom: this.props.addOddMushroom,
                    removeOddMushroom: this.props.removeOddMushroom
                },
                oddPotionLogic: {
                    oddPotion: this.props.oddPotion,
                    addOddPotion: this.props.addOddPotion,
                    removeOddPotion: this.props.removeOddPotion
                },
                poachersSawLogic: {
                    poachersSaw: this.props.poachersSaw,
                    addPoachersSaw: this.props.addPoachersSaw,
                    removePoachersSaw: this.props.removePoachersSaw
                },
                brokenGoronsSwordLogic: {
                    brokenGoronsSword: this.props.brokenGoronsSword,
                    addBrokenGoronsSword: this.props.addBrokenGoronsSword,
                    removeBrokenGoronsSword: this.props.removeBrokenGoronsSword
                },
                prescriptionLogic: {
                    prescription: this.props.prescription,
                    addPrescription: this.props.addPrescription,
                    removePrescription: this.props.removePrescription
                },
                eyeballFrogLogic: {
                    eyeballFrog: this.props.eyeballFrog,
                    addEyeballFrog: this.props.addEyeballFrog,
                    removeEyeballFrog: this.props.removeEyeballFrog
                },
                eyeDropsLogic: {
                    eyeDrops: this.props.eyeDrops,
                    addEyeDrops: this.props.addEyeDrops,
                    removeEyeDrops: this.props.removeEyeDrops
                },
                claimCheckLogic: {
                    claimCheck: this.props.claimCheck,
                    addClaimCheck: this.props.addClaimCheck,
                    removeClaimCheck: this.props.removeClaimCheck
                }
            }
        };

        const sixthRowLogic = {
            stoneOfAgonyLogic: {
                stoneOfAgony: this.props.stoneOfAgony,
                addStoneOfAgony: this.props.addStoneOfAgony,
                removeStoneOfAgony: this.props.removeStoneOfAgony
            },
            piecesOfHeartLogic: {
                piecesOfHeart: this.props.piecesOfHeart,
                addPieceOfHeart: this.props.addPieceOfHeart,
                removePieceOfHeart: this.props.removePieceOfHeart
            },
            heartContainersLogic: {
                heartContainers: this.props.heartContainers,
                addHeartContainer: this.props.addHeartContainer,
                removeHeartContainer: this.props.removeHeartContainer
            },
            doubleDefenseLogic: {
                doubleDefense: this.props.doubleDefense,
                addDoubleDefense: this.props.addDoubleDefense,
                removeDoubleDefense: this.props.removeDoubleDefense
            }
        };

        const dungeonItemLogic = {
            kokiriEmeraldLogic: {
                kokiriEmerald: this.props.kokiriEmerald,
                addKokiriEmerald: this.props.addKokiriEmerald,
                removeKokiriEmerald: this.props.removeKokiriEmerald,
            },
            goronRubyLogic: {
                goronRuby: this.props.goronRuby,
                addGoronRuby: this.props.addGoronRuby,
                removeGoronRuby: this.props.removeGoronRuby,
            },
            zoraSapphireLogic: {
                zoraSapphire: this.props.zoraSapphire,
                addZoraSapphire: this.props.addZoraSapphire,
                removeZoraSapphire: this.props.removeZoraSapphire
            },
            lightMedallionLogic: {
                lightMedallion: this.props.lightMedallion,
                addLightMedallion: this.props.addLightMedallion,
                removeLightMedallion: this.props.removeLightMedallion
            },
            forestMedallionLogic: {
                forestMedallion: this.props.forestMedallion,
                addForestMedallion: this.props.addForestMedallion,
                removeForestMedallion: this.props.removeForestMedallion
            },
            fireMedallionLogic: {
                fireMedallion: this.props.fireMedallion,
                addFireMedallion: this.props.addFireMedallion,
                removeFireMedallion: this.props.removeFireMedallion
            },
            waterMedallionLogic: {
                waterMedallion: this.props.waterMedallion,
                addWaterMedallion: this.props.addWaterMedallion,
                removeWaterMedallion: this.props.removeWaterMedallion
            },
            shadowMedallionLogic: {
                shadowMedallion: this.props.shadowMedallion,
                addShadowMedallion: this.props.addShadowMedallion,
                removeShadowMedallion: this.props.removeShadowMedallion
            },
            spiritMedallionLogic: {
                spiritMedallion: this.props.spiritMedallion,
                addSpiritMedallion: this.props.addSpiritMedallion,
                removeSpiritMedallion: this.props.removeSpiritMedallion
            },
            forestBossKeyLogic: {
                forestBossKey: this.props.forestBossKey,
                addForestBossKey: this.props.addForestBossKey,
                removeForestBossKey: this.props.removeForestBossKey
            },
            fireBossKeyLogic: {
                fireBossKey: this.props.fireBossKey,
                addFireBossKey: this.props.addFireBossKey,
                removeFireBossKey: this.props.removeFireBossKey
            },
            waterBossKeyLogic: {
                waterBossKey: this.props.waterBossKey,
                addWaterBossKey: this.props.addWaterBossKey,
                removeWaterBossKey: this.props.removeWaterBossKey
            },
            shadowBossKeyLogic: {
                shadowBossKey: this.props.shadowBossKey,
                addShadowBossKey: this.props.addShadowBossKey,
                removeShadowBossKey: this.props.removeShadowBossKey
            },
            spiritBossKeyLogic: {
                spiritBossKey: this.props.spiritBossKey,
                addSpiritBossKey: this.props.addSpiritBossKey,
                removeSpiritBossKey: this.props.removeSpiritBossKey
            },
            ganonBossKeyLogic: {
                ganonBossKey: this.props.ganonBossKey,
                addGanonBossKey: this.props.addGanonBossKey,
                removeGanonBossKey: this.props.removeGanonBossKey
            },
        };

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <ItemTracker
                                        tracker={trackerStyle}
                                        firstRowLogic={firstRowLogic}
                                        secondRowLogic={secondRowLogic}
                                        thirdRowLogic={thirdRowLogic}
                                        fourthRowLogic={fourthRowLogic}
                                        fifthRowLogic={fifthRowLogic}
                                        sixthRowLogic={sixthRowLogic}
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column width={16}>
                                    <DungeonItemTracker
                                        dungeons={dungeonStyle}
                                        dungeonItemLogic={dungeonItemLogic}
                                        state={this.state}
                                        smallKeys={this.smallKeyLogic}
                                        // bossKeys={this.bossKeyLogic}
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

function mapStateToProps(state) {
    console.log(state);
    return {
        //First Row Items
        dekuSticks: state.firstRow.dekuSticks, dekuNuts: state.firstRow.dekuNuts, bombs: state.firstRow.bombs,
        fairyBow: state.firstRow.fairyBow, fireArrows: state.firstRow.fireArrows, dinsFire: state.firstRow.dinsFire,
        kokiriSword: state.firstRow.kokiriSword,
        //Second Row Items 
        biggoronSword: state.secondRow.biggoronSword, fairySlingshot: state.secondRow.fairySlingshot,
        fairyOcarina: state.secondRow.fairyOcarina, ocarinaOfTime: state.secondRow.ocarinaOfTime, bombchus: state.secondRow.bombchus,
        hookshot: state.secondRow.hookshot, longshot: state.secondRow.longshot, iceArrows: state.secondRow.iceArrows,
        faroresWind: state.secondRow.faroresWind, dekuShield: state.secondRow.dekuShield,
        //Third Row Items 
        hylianShield: state.thirdRow.hylianShield, mirrorShield: state.thirdRow.mirrorShield, boomerang: state.thirdRow.boomerang,
        lensOfTruth: state.thirdRow.lensOfTruth, magicBeans: state.thirdRow.magicBeans, megatonHammer: state.thirdRow.megatonHammer,
        lightArrows: state.thirdRow.lightArrows, nayrusLove: state.thirdRow.nayrusLove,
        //Fourth Row Items 
        goronTunic: state.fourthRow.goronTunic, zoraTunic: state.fourthRow.zoraTunic, wallet: state.wallet,
        skulltulas: state.fourthRow.skulltulas, emptyBottles: state.fourthRow.emptyBottles, rutosLetter: state.fourthRow.rutosLetter,
        weirdEgg: state.fourthRow.weirdEgg, cucco: state.fourthRow.cucco, zeldasLetter: state.fourthRow.zeldasLetter,
        keatonMask: state.fourthRow.keatonMask, skullMask: state.fourthRow.skullMask, spookyMask: state.fourthRow.spookyMask,
        bunnyHood: state.fourthRow.bunnyHood, maskOfTruth: state.fourthRow.maskOfTruth,
        //Fifth Row Items
        ironBoots: state.fifthRow.ironBoots, hoverBoots: state.fifthRow.hoverBoots, silverScale: state.fifthRow.silverScale,
        goldenScale: state.fifthRow.goldenScale, magic: state.fifthRow.magic, doubleMagic: state.fifthRow.doubleMagic,
        goronsBracelet: state.fifthRow.goronsBracelet, silverGauntlets: state.fifthRow.silverGauntlets, goldenGauntlets: state.fifthRow.goldenGauntlets,
        gerudoCard: state.fifthRow.gerudoCard, pocketEgg: state.fifthRow.pocketEgg, pocketCucco: state.fifthRow.pocketCucco,
        cojiro: state.fifthRow.cojiro, oddMushroom: state.fifthRow.oddMushroom, oddPotion: state.fifthRow.oddPotion,
        poachersSaw: state.fifthRow.poachersSaw, brokenGoronsSword: state.fifthRow.brokenGoronsSword, prescription: state.fifthRow.prescription,
        eyeballFrog: state.fifthRow.eyeballFrog, eyeDrops: state.fifthRow.eyeDrops, claimCheck: state.fifthRow.claimCheck,
        //Sixth Row Items
        stoneOfAgony: state.sixthRow.stoneOfAgony, piecesOfHeart: state.sixthRow.piecesOfHeart, heartContainers: state.sixthRow.heartContainers,
        doubleDefense: state.sixthRow.doubleDefense,
        //Dungeon Items
        kokiriEmerald: state.gems.kokiriEmerald, goronRuby: state.gems.goronRuby, zoraSapphire: state.gems.zoraSapphire,
        lightMedallion: state.medallions.lightMedallion, forestMedallion: state.medallions.forestMedallion, fireMedallion: state.medallions.fireMedallion,
        waterMedallion: state.medallions.waterMedallion, shadowMedallion: state.medallions.shadowMedallion, spiritMedallion: state.medallions.spiritMedallion,
        forestBossKey: state.bossKeys.forestBossKey, fireBossKey: state.bossKeys.fireBossKey, waterBossKey: state.bossKeys.waterBossKey,
        shadowBossKey: state.bossKeys.shadowBossKey, spiritBossKey: state.bossKeys.shadowBossKey, ganonBossKey: state.bossKeys.ganonBossKey,
    }
};

export default compose(connect(mapStateToProps, {
    //First Row Actions
    addDekuSticks, removeDekuSticks, addDekuNuts, removeDekuNuts, addBombs, removeBombs, addFairyBow, removeFairyBow,
    addFireArrows, removeFireArrows, addDinsFire, removeDinsFire, addKokiriSword, removeKokiriSword,
    //Second Row Actions 
    addBiggoronSword, removeBiggoronSword, addFairySlingshot, removeFairySlingshot, addFairyOcarina, removeFairyOcarina,
    addOcarinaOfTime, removeOcarinaOfTime, addBombchus, removeBombchus, addHookshot, removeHookshot,
    addLongshot, removeLongshot, addIceArrows, removeIceArrows, addFaroresWind, removeFaroresWind, addDekuShield, removeDekuShield,
    //Third Row Actions 
    addHylianShield, removeHylianShield, addMirrorShield, removeMirrorShield, addBoomerang, removeBoomerang,
    addLensOfTruth, removeLensOfTruth, addMagicBeans, removeMagicBeans, addMegatonHammer, removeMegatonHammer,
    addLightArrows, removeLightArrows, addNayrusLove, removeNayrusLove,
    //Fourth Row Actions 
    addGoronTunic, removeGoronTunic, addZoraTunic, removeZoraTunic, addWallet, removeWallet, addSkulltula, removeSkulltula,
    addEmptyBottle, removeEmptyBottle, addRutosLetter, removeRutosLetter, addWeirdEgg, removeWeirdEgg,
    addCucco, removeCucco, addZeldasLetter, removeZeldasLetter, addKeatonMask, removeKeatonMask, addSkullMask, removeSkullMask,
    addSpookyMask, removeSpookyMask, addBunnyHood, removeBunnyHood, addMaskOfTruth, removeMaskOfTruth,
    //Fifth Row Actions
    addIronBoots, removeIronBoots, addHoverBoots, removeHoverBoots, addSilverScale, removeSilverScale,
    addGoldenScale, removeGoldenScale, addMagic, removeMagic, addDoubleMagic, removeDoubleMagic,
    addGoronsBracelet, removeGoronsBracelet, addSilverGauntlets, removeSilverGauntlets, addGoldenGauntlets, removeGoldenGauntlets,
    addGerudoCard, removeGerudoCard, addPocketEgg, removePocketEgg, addPocketCucco, removePocketCucco, addCojiro, removeCojiro,
    addOddMushroom, removeOddMushroom, addOddPotion, removeOddPotion, addPoachersSaw, removePoachersSaw,
    addBrokenGoronsSword, removeBrokenGoronsSword, addPrescription, removePrescription, addEyeballFrog, removeEyeballFrog,
    addEyeDrops, removeEyeDrops, addClaimCheck, removeClaimCheck,
    //Sixth Row Actions
    addStoneOfAgony, removeStoneOfAgony, addPieceOfHeart, removePieceOfHeart, addHeartContainer, removeHeartContainer,
    addDoubleDefense, removeDoubleDefense,
    //Dungeon Items
    addKokiriEmerald, removeKokiriEmerald, addGoronRuby, removeGoronRuby, addZoraSapphire, removeZoraSapphire,
    addLightMedallion, removeLightMedallion, addForestMedallion, removeForestMedallion, addFireMedallion, removeFireMedallion,
    addWaterMedallion, removeWaterMedallion, addShadowMedallion, removeShadowMedallion, addSpiritMedallion, removeSpiritMedallion,
    addForestBossKey, removeForestBossKey, addFireBossKey, removeFireBossKey, addWaterBossKey, removeWaterBossKey,
    addShadowBossKey, removeShadowBossKey, addSpiritBossKey, removeSpiritBossKey, addGanonBossKey, removeGanonBossKey
}))(Home);