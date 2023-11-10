const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removequantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (<div>
        <button onClick={removequantity}>-</button>
        <span> {quantity} </span>
        <button onClick={addQuantity}>+</button>
    </div>)
}

export default ChangeQuantity;