import React from "react";
import { Grid } from "semantic-ui-react";
import KokiriBoots from "../../../components/Items/KokiriBoots";
import IronBoots from "../../../components/Items/IronBoots";
import HoverBoots from "../../../components/Items/HoverBoots";
import ZoraScale from "../../../components/Items/ZoraScale";
import MagicMeter from "../../../components/Items/MagicMeter";
import GoronBracelet from "../../../components/Items/GoronBracelet";
import GerudoCard from "../../../components/Items/GerudoCard";
import FutureTradeSequence from "../../../components/Items/FutureTradeSequence";

const FifthRow = (props) => {

    const { ironBoots, addIronBoots, removeIronBoots } = props.fifthRowLogic.ironBootsLogic;
    const { hoverBoots, addHoverBoots, removeHoverBoots } = props.fifthRowLogic.hoverBootsLogic;
    const { 
        silverScale, addSilverScale, removeSilverScale,
        goldenScale, addGoldenScale, removeGoldenScale 
    } = props.fifthRowLogic.zoraScaleLogic;
    const {
        magic, addMagic, removeMagic,
        doubleMagic, addDoubleMagic, removeDoubleMagic
    } = props.fifthRowLogic.magicLogic;
    const { 
        goronsBracelet, addGoronsBracelet, removeGoronsBracelet,
        silverGauntlets, addSilverGauntlets, removeSilverGauntlets,
        goldenGauntlets, addGoldenGauntlets, removeGoldenGauntlets,
    } = props.fifthRowLogic.strengthEnhancerLogic;
    const { gerudoCard, addGerudoCard, removeGerudoCard } = props.fifthRowLogic.gerudoCardLogic;
    const { 
        pocketEggLogic, pocketCuccoLogic, cojiroLogic,
        oddMushroomLogic, oddPotionLogic, poachersSawLogic,
        brokenGoronsSwordLogic, prescriptionLogic, eyeballFrogLogic,
        eyeDropsLogic, claimCheckLogic
    } = props.fifthRowLogic.futureTradeLogic;

    return (
        <Grid.Row>
            <KokiriBoots />
            <IronBoots 
                ironBoots={ironBoots}
                addIronBoots={addIronBoots}
                removeIronBoots={removeIronBoots}
            />
            <HoverBoots 
                hoverBoots={hoverBoots}
                addHoverBoots={addHoverBoots}
                removeHoverBoots={removeHoverBoots}
            />
            <ZoraScale 
                silverScale={silverScale}
                addSilverScale={addSilverScale}
                removeSilverScale={removeSilverScale}
                goldenScale={goldenScale}
                addGoldenScale={addGoldenScale}
                removeGoldenScale={removeGoldenScale}
            />
            <MagicMeter 
                magic={magic}
                addMagic={addMagic}
                removeMagic={removeMagic}
                doubleMagic={doubleMagic}
                addDoubleMagic={addDoubleMagic}
                removeDoubleMagic={removeDoubleMagic}
            />
            <GoronBracelet 
                goronsBracelet={goronsBracelet}
                addGoronsBracelet={addGoronsBracelet}
                removeGoronsBracelet={removeGoronsBracelet}
                silverGauntlets={silverGauntlets}
                addSilverGauntlets={addSilverGauntlets}
                removeSilverGauntlets={removeSilverGauntlets}
                goldenGauntlets={goldenGauntlets}
                addGoldenGauntlets={addGoldenGauntlets}
                removeGoldenGauntlets={removeGoldenGauntlets}
            />
            <GerudoCard 
                gerudoCard={gerudoCard}
                addGerudoCard={addGerudoCard}
                removeGerudoCard={removeGerudoCard}
            />
            <FutureTradeSequence 
                pocketEggLogic={pocketEggLogic}
                pocketCuccoLogic={pocketCuccoLogic}
                cojiroLogic={cojiroLogic}
                oddMushroomLogic={oddMushroomLogic}
                oddPotionLogic={oddPotionLogic}
                poachersSawLogic={poachersSawLogic}
                brokenGoronsSwordLogic={brokenGoronsSwordLogic}
                prescriptionLogic={prescriptionLogic}
                eyeballFrogLogic={eyeballFrogLogic}
                eyeDropsLogic={eyeDropsLogic}
                claimCheckLogic={claimCheckLogic}
            />
        </Grid.Row>
    );
}

export default FifthRow;