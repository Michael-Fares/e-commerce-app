import React from 'react'
import { Route, Routes } from 'react-router'


import Products from './components/products/Products'
import Cart from './components/cart/Cart'

const Router = ({products, cartItems, handleAddToCart}) => {
  return (
      <Routes>
          <Route path="/" exact element={<Products products={products} handleAddToCart={handleAddToCart} cartItems={cartItems}/>} />
          <Route path="/cart" element={<Cart handleAddToCart={handleAddToCart} cartItems={cartItems}/>} />
      </Routes>
  )
};

export default Router;