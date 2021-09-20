import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GerudoCardIcon from "../../../assets/images/Gerudo-Membership-Card.png";

const GerudoCard = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={GerudoCardIcon} />
        </Grid.Column>
    );
}

export default GerudoCard;