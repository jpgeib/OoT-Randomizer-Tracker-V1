import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DungeonMapIcon from "../../../../assets/images/dungeon-items/Dungeon_Map_3D.png";

const DungeonMap = (props) => {

    const { hasDungeonMap, gotDungeonMap, removeDungeonMap } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={gotDungeonMap}
                onContextMenu={removeDungeonMap}
                style={(hasDungeonMap === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }}  
                size="mini" 
                src={DungeonMapIcon} 
            />
        </Grid.Column>
    );
}

export default DungeonMap;