import React from "react";


const CartContext = React.createContext({
    items:[],
    toatalAmount:0,
    additem :(item)=>{},
    removeItem:(id)=>{}
});


export default CartContext;