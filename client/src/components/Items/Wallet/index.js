import React from "react";
import { Grid, Image } from "semantic-ui-react";
import WalletIcon from "../../../assets/images/ChildsWallet.png";

const Wallet = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={WalletIcon} />
        </Grid.Column>
    );
}

export default Wallet;