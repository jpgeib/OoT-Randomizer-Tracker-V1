import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BigGoronSwordIcon from "../../../assets/images/BiggoronSword.png";

const BigGoronSword = (props) => {

    const { biggoronSword, addBiggoronSword, removeBiggoronSword } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addBiggoronSword}
                onContextMenu={removeBiggoronSword}
                style={(biggoronSword === false || null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={BigGoronSwordIcon} 
            />
        </Grid.Column>
    );
}

export default BigGoronSword;