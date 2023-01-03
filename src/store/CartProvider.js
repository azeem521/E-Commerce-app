import React, { useState } from 'react'
import cartContext from './cart-context'

const CartProvider = (props) => {

    const [items,setItems]=useState([])

   

    const addItemToCartHandler=(item)=>{
        setItems([
            ...items,
            item
        ])
    };

    const CartContext={
        item:items,
        totalAmount:0,
        addItem:addItemToCartHandler,

    }

    
  return (
    <cartContext.Provider value={CartContext}>
        {props.children }
        console.log(items);
    </cartContext.Provider>
  )
}

export default CartProvider