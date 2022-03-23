import React from "react";
import { Grid } from "semantic-ui-react";
import KokiriTunic from "../../../components/Items/KokiriTunic";
import GoronTunic from "../../../components/Items/GoronTunic";
import ZoraTunic from "../../../components/Items/ZoraTunic";
import Wallet from "../../../components/Items/Wallet";
import SkulltulaTokens from "../../../components/Items/SkulltulaTokens";
import EmptyBottle from "../../../components/Items/EmptyBottle";
import RutosLetter from "../../../components/Items/RutosLetter";
import PastTradeSequence from "../../../components/Items/PastTradeSequence";

const FourthRow = (props) => {

    const { goronTunic, addGoronTunic, removeGoronTunic } = props.fourthRowLogic.goronTunicLogic;
    const { zoraTunic, addZoraTunic, removeZoraTunic } = props.fourthRowLogic.zoraTunicLogic;
    const { wallet, addWallet, removeWallet } = props.fourthRowLogic.walletLogic;
    const { skulltulas, addSkulltula, removeSkulltula } = props.fourthRowLogic.skulltulasLogic;
    const { emptyBottles, addEmptyBottle, removeEmptyBottle } = props.fourthRowLogic.emptyBottlesLogic;
    const { rutosLetter, addRutosLetter, removeRutosLetter } = props.fourthRowLogic.rutosLetterLogic;
    const { 
        weirdEggLogic, cuccoLogic, zeldasLetterLogic, keatonMaskLogic,
        skullMaskLogic, spookyMaskLogic, bunnyHoodLogic, maskOfTruthLogic 
    } = props.fourthRowLogic.pastTradeLogic;
    
    return (
        <Grid.Row>
            <KokiriTunic />
            <GoronTunic 
                goronTunic={goronTunic}
                addGoronTunic={addGoronTunic}
                removeGoronTunic={removeGoronTunic}
            />
            <ZoraTunic 
                zoraTunic={zoraTunic}
                addZoraTunic={addZoraTunic}
                removeZoraTunic={removeZoraTunic}
            />
            <Wallet 
                wallet={wallet}
                addWallet={addWallet}
                removeWallet={removeWallet}
            />
            <SkulltulaTokens 
                counter={skulltulas}  
                add={addSkulltula} 
                remove={removeSkulltula}
            />
            <EmptyBottle
                emptyBottles={emptyBottles}
                addBottle={addEmptyBottle}
                removeBottle={removeEmptyBottle}
            />
            <RutosLetter 
                rutosLetter={rutosLetter}
                addRutosLetter={addRutosLetter}
                removeRutosLetter={removeRutosLetter}
            />
            <PastTradeSequence 
                weirdEggLogic={weirdEggLogic}
                cuccoLogic={cuccoLogic}
                zeldasLetterLogic={zeldasLetterLogic}
                keatonMaskLogic={keatonMaskLogic}
                skullMaskLogic={skullMaskLogic}
                spookyMaskLogic={spookyMaskLogic}
                bunnyHoodLogic={bunnyHoodLogic}
                maskOfTruthLogic={maskOfTruthLogic}
            />
        </Grid.Row>
    );
}

export default FourthRow;