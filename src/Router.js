import React from 'react'
import { Route, Routes } from 'react-router'


import Products from './components/products/Products'
import Cart from './components/cart/Cart'

const Router = ({products, cartItems, handleAddToCart, handleDelete, handleIncrement, handleDecrement}) => {
  return (
      <Routes>
          <Route path="/" exact element={<Products products={products} handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
          <Route path="/cart" element={<Cart handleAddToCart={handleAddToCart} handleDelete={handleDelete} handleIncrement={handleIncrement} cartItems={cartItems} handleDecrement={handleDecrement}/>} />
      </Routes>
  )
};

export default Router;