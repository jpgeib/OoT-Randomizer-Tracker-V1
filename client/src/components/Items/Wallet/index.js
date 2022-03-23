import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import ChildsWalletIcon from "../../../assets/images/ChildsWallet.png";
import AdultsWalletIcon from "../../../assets/images/fourth-row/Adults-Wallet.png";
import GiantsWalletIcon from "../../../assets/images/fourth-row/Giants-Wallet.png";

const Wallet = (props) => {

    const { wallet, addWallet, removeWallet } = props;
    const walletIcons = (
        ((wallet === 99 || wallet === 999) && ChildsWalletIcon) || 
        (wallet === 200 && AdultsWalletIcon) || 
        (wallet === 500 && GiantsWalletIcon)
    );

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addWallet}
                onContextMenu={removeWallet} 
                size="mini" 
                src={walletIcons} 
            />
            <Header style={(wallet >= 500) ? { color: "red" } : { color: "white" } } as="h1"><span>{wallet}</span></Header>
        </Grid.Column>
    );
}

export default Wallet;