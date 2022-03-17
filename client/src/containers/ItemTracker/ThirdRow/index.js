import React from "react";
import { Grid } from "semantic-ui-react";
import HylianShield from "../../../components/Items/HylianShield";
import MirrorShield from "../../../components/Items/MirrorShield";
import Boomerang from "../../../components/Items/Boomerang";
import LensOfTruth from "../../../components/Items/LensOfTruth";
import MagicBeans from "../../../components/Items/MagicBeans";
import MegatonHammer from "../../../components/Items/MegatonHammer";
import LightArrows from "../../../components/Items/LightArrows";
import NayrusLove from "../../../components/Items/NayrusLove";

const ThirdRow = (props) => {

    const { hylianShield, addHylianShield, removeHylianShield } = props.thirdRowLogic.hylianShieldLogic;
    const { mirrorShield, addMirrorShield, removeMirrorShield } = props.thirdRowLogic.mirrorShieldLogic;
    const { boomerang, addBoomerang, removeBoomerang } = props.thirdRowLogic.boomerangLogic;
    const { lensOfTruth, addLensOfTruth, removeLensOfTruth } = props.thirdRowLogic.lensOfTruthLogic;
    const { magicBeans, addMagicBeans, removeMagicBeans } = props.thirdRowLogic.magicBeansLogic;
    const { megatonHammer, addMegatonHammer, removeMegatonHammer } = props.thirdRowLogic.megatonHammerLogic;
    const { lightArrows, addLightArrows, removeLightArrows } = props.thirdRowLogic.lightArrowLogic;
    const { nayrusLove, addNayrusLove, removeNayrusLove } = props.thirdRowLogic.nayrusLoveLogic;

    return (
        <Grid.Row>
            <HylianShield 
                hylianShield={hylianShield} 
                addHylianShield={addHylianShield} 
                removeHylianShield={removeHylianShield} 
            />
            <MirrorShield 
                mirrorShield={mirrorShield}
                addMirrorShield={addMirrorShield}
                removeMirrorShield={removeMirrorShield}
            />
            <Boomerang 
                boomerang={boomerang}
                addBoomerang={addBoomerang}
                removeBoomerang={removeBoomerang}
            />
            <LensOfTruth 
                lensOfTruth={lensOfTruth}
                addLensOfTruth={addLensOfTruth}
                removeLensOfTruth={removeLensOfTruth}
            />
            <MagicBeans 
                counter={magicBeans}
                add={addMagicBeans}
                remove={removeMagicBeans}
            />
            <MegatonHammer 
                megatonHammer={megatonHammer}
                addMegatonHammer={addMegatonHammer}
                removeMegatonHammer={removeMegatonHammer}
            />
            <LightArrows 
                lightArrows={lightArrows}
                addLightArrows={addLightArrows}
                removeLightArrows={removeLightArrows}
            />
            <NayrusLove 
                nayrusLove={nayrusLove}
                addNayrusLove={addNayrusLove}
                removeNayrusLove={removeNayrusLove}
            />
        </Grid.Row>
    );
}

export default ThirdRow;