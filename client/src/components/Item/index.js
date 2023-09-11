import React from "react";
import { Image, Header } from "semantic-ui-react";

const Item = (props) => {

    const { item } = props;

    return (
        <div style={{ position: "relative" }}>
            <Image
                size="mini"
                src={item.image}
            />
            {item.quantity > -1 ? <Header as="h1"><span style={item.style}>{item.quantity}</span></Header> : null}
        </div>
    );
}

export default Item;