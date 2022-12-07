import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
/* import Item from "./Item/Item" */
const URL = "https://636e8c97bb9cf402c804b356.mockapi.io/Amigurumis"

function ItemListContainer(props) {

    const [productos, setProductos] = useState(null)

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const respuesta = await fetch(URL)
                const data = await respuesta.json()
                console.log(data)
                setProductos(data)
            } catch (error) {
                /* devuelveError() */
            } finally {
            }
        }
        cargarProductos()
    }, [])


    return (
        <div>
            <h1>{props.greeting}</h1>
            {productos ?
                <ItemList products={productos} />
                :
                null
            }
        </div>
    )
}

export default ItemListContainer;