import React from "react";
import { Grid, Image } from "semantic-ui-react";
import BoomerangIcon from "../../../assets/images/Boomerang.png";

const Boomerang = (props) => {

    const { boomerang, addBoomerang, removeBoomerang } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addBoomerang}
                onContextMenu={removeBoomerang} 
                style={(boomerang === false || boomerang === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={BoomerangIcon} 
            />
        </Grid.Column>
    );
}

export default Boomerang;