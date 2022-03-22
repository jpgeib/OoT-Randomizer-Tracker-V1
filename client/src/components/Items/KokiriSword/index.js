import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriSwordIcon from "../../../assets/images/first-row/Kokiri-Sword-3D.png";

const KokiriSword = (props) => {

    const { kokiriSword, addKokiriSword, removeKokiriSword } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addKokiriSword}
                onContextMenu={removeKokiriSword}
                style={(kokiriSword === false || null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }}
                size="mini" 
                src={KokiriSwordIcon} 
            />
        </Grid.Column>
    );
}

export default KokiriSword;