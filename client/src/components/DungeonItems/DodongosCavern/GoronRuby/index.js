import React from "react";
import { Grid, Image } from "semantic-ui-react";
import GoronRubyIcon from "../../../../assets/images/dungeon-items/Gorons-Ruby.png";

const GoronRuby = (props) => {

    const { goronRuby, addGoronRuby, removeGoronRuby } = props;

    return (
        <Grid.Column width={2}>
            <Image
                onClick={addGoronRuby}
                onContextMenu={removeGoronRuby}
                style={(goronRuby === false || goronRuby === null) ? { filter: "grayscale(100%)" } : { filter: "grayscale(0%)" }} 
                size="mini" 
                src={GoronRubyIcon} 
            />
        </Grid.Column>
    );
}

export default GoronRuby;