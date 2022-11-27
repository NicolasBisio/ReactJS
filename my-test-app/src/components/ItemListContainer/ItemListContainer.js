import Item from "./Item/Item"

function ItemListContainer (props) {
    const item = {
        greeting: "¡Bienvenidos a todos los amantes del tejido a crochet!"
    }

    return (
        <div>
            <Item name = {item.greeting}/>
        </div>
    )
}

export default ItemListContainer;