import React from "react";
import { Image, Header } from "semantic-ui-react";

const Item = (props) => {

    const { item, addItem, removeItem } = props;

    return (
        <div style={{ position: "relative" }}>
            <Image
                onClick={addItem}
                onContextMenu={removeItem}
                size="mini"
                src={item.image}
            />
            {item.quantity > -1 ? <Header as="h1"><span style={item.style}>{item.quantity}</span></Header> : null}
        </div>
    );
}

export default Item;