import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {

    const { addTrainingKey, removeTrainingKey, trainingKeys } = props.trainingKeysLogic;

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={addTrainingKey}
                onContextMenu={removeTrainingKey}
                style={(trainingKeys > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(trainingKeys === 9) ? { color: "red" } : { color: "black" } } as="h1"><span>{trainingKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;