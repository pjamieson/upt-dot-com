import React, { createContext, useState } from "react"
import { getCart, saveCart } from "../utils/cart"

const defaultState = {
  isInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
}
// Fixes issue as described at https://github.com/gatsbyjs/gatsby/issues/19255

export const CartContext = createContext(defaultState)

const CartFunctions = ({children}) => {

  const [cart, setCart] = useState(getCart)

  const isInCart = (cartItem) => {
    const indexOfItem = cart.findIndex(item =>
      item.sku === cartItem.sku
    )
    return indexOfItem !== -1 ? true : false
  }

  const addToCart = (cartItem) => {
    const cartCopy = [...cart]

    // Find sku in Cart
    const indexOfItem = cartCopy.findIndex(item =>
      item.sku === cartItem.sku
    )

    if (indexOfItem === -1) {
      // Not already there; New item
      cartCopy.push(cartItem)
    }

    updateCart(cartCopy)
  }

  const removeFromCart = (cartItem) => {
    const cartCopy = [...cart]

    // Find sku in Cart
    const indexOfItem = cartCopy.findIndex(item =>
      item.sku === cartItem.sku
    )

    if (indexOfItem !== -1) {
      // Found it, now remove
      cartCopy.splice(indexOfItem, 1)
    }

    updateCart(cartCopy)
  }

  const updateCart = (updatedCart) => {
    setCart(updatedCart)
    saveCart(updatedCart)
  }

  const clearCart = () => {
    const emptyCart = []
    updateCart(emptyCart)
  }

  return (
    <CartContext.Provider value={{cart, isInCart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartFunctions
