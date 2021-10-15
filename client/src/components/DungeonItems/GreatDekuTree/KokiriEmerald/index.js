import React from "react";
import { Grid, Image } from "semantic-ui-react";
import KokiriEmeraldIcon from "../../../../assets/images/Kokiri_Emerald.png";

const KokiriEmerald = (props) => {

    const { hasKokiriEmerald, addKokiriEmerald, removeKokiriEmerald } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addKokiriEmerald}
                onContextMenu={removeKokiriEmerald}
                style={(hasKokiriEmerald === false) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }}  
                size="mini" 
                src={KokiriEmeraldIcon} 
            />
        </Grid.Column>
    );
}

export default KokiriEmerald;