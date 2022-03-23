import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import WalletIcon from "../../../assets/images/ChildsWallet.png";

const Wallet = (props) => {

    const { wallet, addWallet, removeWallet } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addWallet}
                onContextMenu={removeWallet} 
                size="mini" 
                src={WalletIcon} 
            />
            <Header style={(wallet >= 500) ? { color: "red" } : { color: "white" } } as="h1"><span>{wallet}</span></Header>
        </Grid.Column>
    );
}

export default Wallet;