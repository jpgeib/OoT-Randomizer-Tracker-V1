import React from "react";
import { Grid, Image } from "semantic-ui-react";
import EmptyBottleIcon from "../../../assets/images/Bottle-Model.png";

const EmptyBottle = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={EmptyBottleIcon} />
        </Grid.Column>
    );
}

export default EmptyBottle;