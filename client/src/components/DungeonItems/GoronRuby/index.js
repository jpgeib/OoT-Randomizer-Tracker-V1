import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronRubyIcon from "../../../assets/images/Goron's_Ruby.png";

const GoronRuby = () => {
    return (
        <Grid.Column width={2}>
            <Image size="mini" src={GoronRubyIcon} />
        </Grid.Column>
    );
}

export default GoronRuby;