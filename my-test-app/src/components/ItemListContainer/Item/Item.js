function Item(props) {
    const { greeting } = props;

    return (
        <span style={{ color: "#5f3700" }}>{greeting}</span>
    )
}

export default Item