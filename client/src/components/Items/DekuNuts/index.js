import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import DekuNutsIcon from "../../../assets/images/first-row/Deku-Nut-3D.png";

const DekuNuts = (props) => {

    const { add, remove, counter, counterStyle } = props;

    return (
        <Grid.Column width={2}>
            <div style={{position: "relative"}}>
            <Image 
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"} }
                size="mini" 
                src={DekuNutsIcon} 
            />
            <Header style={(counter >= 40) ? { color: "red" } : { color: "white" } } as="h1"><span style={counterStyle}>{counter}</span></Header>
            </div>
        </Grid.Column>
    );
}

export default DekuNuts;