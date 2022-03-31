import React from "react";
import { Grid, Image } from "semantic-ui-react";
import StoneOfAgonyIcon from "../../../assets/images/sixth-row/Shard-of-Agony.png";

const StoneOfAgony = (props) => {

    const { stoneOfAgony, addStoneOfAgony, removeStoneOfAgony } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addStoneOfAgony}
                onContextMenu={removeStoneOfAgony}
                style={(stoneOfAgony === false || stoneOfAgony === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={StoneOfAgonyIcon} 
            />
        </Grid.Column>
    );
}

export default StoneOfAgony;