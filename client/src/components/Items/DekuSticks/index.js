import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import DekuSticksIcon from "../../../assets/images/Deku_Stick.png";

const DekuSticks = (props) => {

    const { counter, add, remove } = props;

    // const rightClick = (e) => {
    //     e.preventDefault();
    //     decrement();
    // }

    return (
        <Grid.Column width={2}>
            <Image 
                onClick={add} 
                onContextMenu={remove} 
                size="mini" 
                src={DekuSticksIcon} 
            />
            <Header color="red" as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default DekuSticks;