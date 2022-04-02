import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import SmallKeyIcon from "../../../../assets/images/dungeon-items/Small_Key_3D.png";

const SmallKey = (props) => {
    
    const { fireKeys, addFireKey, removeFireKey } = props.fireKeysLogic;
    
    return (
        <Grid.Column width={2}>
            <Image
                onClick={addFireKey}
                onContextMenu={removeFireKey}
                style={(fireKeys < 1) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={SmallKeyIcon} 
            />
            <Header style={(fireKeys === 8) ? { color: "red" } : { color: "black" } } as="h1"><span>{fireKeys}</span></Header>
        </Grid.Column>
    );
}

export default SmallKey;