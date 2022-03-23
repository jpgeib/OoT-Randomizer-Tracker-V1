import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ZoraTunicIcon from "../../../assets/images/fourth-row/Zora-Tunic-3D.png";

const ZoraTunic = (props) => {

    const { zoraTunic, addZoraTunic, removeZoraTunic } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addZoraTunic}
                onContextMenu={removeZoraTunic}
                style={(zoraTunic === false || zoraTunic === null) ? { filter: "grayscale(100%)"} : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={ZoraTunicIcon} 
            />
        </Grid.Column>
    );
}

export default ZoraTunic;