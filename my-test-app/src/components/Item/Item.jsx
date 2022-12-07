import React from "react";

function Item(product) {
    return (
            <div className="card">
                <div className=""><img src="./img/{product.imagen}.jpg" alt={product.imagen} className="card__imagen" title={product.nombre}/></div>
                <div className="card-name">{product.nombre}</div>
                <div className="card-price">$ {product.precio}</div>
                <div className="boton card-button">
                    <button className="btnAgregar" id={product.nombre} title="Pulsa para agregar '{product.nombre}' al carrito">Agregar</button>
                </div>
            </div>);
}

export default Item