import React from "react";
import { Grid, Image } from "semantic-ui-react";
import DinsFireIcon from "../../../assets/images/first-row/Dins-Fire-3D.png";

const DinsFire = (props) => {

    const { dinsFire, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(dinsFire === false || null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={DinsFireIcon} 
            />
        </Grid.Column>
    );
}

export default DinsFire;