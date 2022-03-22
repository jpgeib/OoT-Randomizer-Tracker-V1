import React from "react";
import { Grid, Image, Header } from "semantic-ui-react";
import MagicBeansIcon from "../../../assets/images/third-row/Magic-Bean-3D.png";

const MagicBeans = (props) => {

    const { counter, add, remove } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={add}
                onContextMenu={remove}
                style={(counter > 0) ? { filter: "grayscale(0%)" } : { filter: "grayscale(100%)"}}
                size="mini" 
                src={MagicBeansIcon} 
            />
            <Header style={(counter >= 10) ? { color: "red" } : { color: "white" } } as="h1"><span>{counter}</span></Header>
        </Grid.Column>
    );
}

export default MagicBeans;