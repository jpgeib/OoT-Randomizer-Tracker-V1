import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriSwordIcon from "../../../assets/images/Kokiri_Sword.png";

const KokiriSword = (props) => {

    const { hasKokiriSword, gotKokiriSword, removeKokiriSword } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={gotKokiriSword}
                onContextMenu={removeKokiriSword}
                style={(hasKokiriSword === false) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={KokiriSwordIcon} 
            />
        </Grid.Column>
    );
}

export default KokiriSword;