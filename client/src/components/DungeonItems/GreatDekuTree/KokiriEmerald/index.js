import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriEmeraldIcon from "../../../../assets/images/dungeon-items/Kokiris-Emerald.png";

const KokiriEmerald = (props) => {

    const { kokiriEmerald, addKokiriEmerald, removeKokiriEmerald } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addKokiriEmerald}
                onContextMenu={removeKokiriEmerald}
                style={(kokiriEmerald === false || kokiriEmerald === null) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }}  
                size="mini" 
                src={KokiriEmeraldIcon} 
            />
        </Grid.Column>
    );
}

export default KokiriEmerald;