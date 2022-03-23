import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronTunicIcon from "../../../assets/images/fourth-row/Goron-Tunic-3D.png";

const GoronTunic = (props) => {

    const { goronTunic, addGoronTunic, removeGoronTunic } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addGoronTunic}
                onContextMenu={removeGoronTunic}
                style={(goronTunic === false || goronTunic === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={GoronTunicIcon} 
            />
        </Grid.Column>
    );
}

export default GoronTunic;