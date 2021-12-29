import React from 'react'
import { Route, Routes } from 'react-router'


import Products from './components/Products'
import Cart from './components/Cart'

const Router = ({products}) => {
  return (
      <Routes>
          <Route path="/" exact element={<Products products={products}/>} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
  )
};

export default Router;