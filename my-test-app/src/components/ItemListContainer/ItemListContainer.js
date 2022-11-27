import Item from "./Item/Item"

function ItemListContainer (props) {
    const Item = {
        greeting: "¡Bienvenidos a todos los amantes del tejido a crochet!"
    }

    return (
        <div>
            <Item name = {Item.greeting}/>
        </div>
    )
}

export default ItemListContainer;