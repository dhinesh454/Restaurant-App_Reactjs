import CartContext from "./cart-context";


const CartProvider = props  => {
    const addItemToCartHandler = (item) => {};

    const removeFromCartHandler = (id) => {};



    const cartContext ={
        items:[],
        toatalAmount:0,
        additem :addItemToCartHandler,
        removeItem:removeFromCartHandler
    };


    return (
        <CartContext.Provider value = {cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}



export default CartProvider;