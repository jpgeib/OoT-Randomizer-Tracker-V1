import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DungeonMapIcon from "../../../assets/images/DungeonMap.png";

const DungeonMap = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={DungeonMapIcon} />
        </Grid.Column>
    );
}

export default DungeonMap;