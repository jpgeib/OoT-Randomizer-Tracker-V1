import React from "react";
import { Image, Header } from "semantic-ui-react";

const Item = (props) => {

    const { itemImg } = props;

    return (
        <div style={{ position: "relative" }}>
            <Image
                size="mini"
                src={itemImg}
            />
        </div>
    );
}

export default Item;