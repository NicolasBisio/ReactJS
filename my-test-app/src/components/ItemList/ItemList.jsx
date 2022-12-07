import React from "react";
import Item from "../Item/Item";

function ItemList({products}) {
    return(
        <ul>
            {products.map(producto => {
                return <Item product={producto} key={producto.id}/>
            })}
        </ul>
    )
}

export default ItemList