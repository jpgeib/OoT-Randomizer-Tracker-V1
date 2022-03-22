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

    const { skulltulaCounter, emptyBottles } = props.state;
    const { addSkulltula, removeSkulltula } = props.skulltulas;
    const { addBottle, removeBottle } = props.emptyBottles;

    return (
        <Grid.Row>
            <KokiriTunic />
            <GoronTunic />
            <ZoraTunic />
            <Wallet />
            <SkulltulaTokens 
                counter={skulltulaCounter}  
                increment={addSkulltula} 
                decrement={removeSkulltula}
            />
            <EmptyBottle
                emptyBottles={emptyBottles}
                addBottle={addBottle}
                removeBottle={removeBottle}
            />
            <RutosLetter />
            <PastTradeSequence />
        </Grid.Row>
    );
}

export default FourthRow;