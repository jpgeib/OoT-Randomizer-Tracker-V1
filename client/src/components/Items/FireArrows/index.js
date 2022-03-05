import React from "react";
import { Grid, Image } from "semantic-ui-react";
import FireArrowsIcon from "../../../assets/images/Fire_Arrow.png";

const FireArrows = (props) => {

    const { fireArrows, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(fireArrows === false || fireArrows === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={FireArrowsIcon} 
            />
        </Grid.Column>
    );
}

export default FireArrows;