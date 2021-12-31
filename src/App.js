import './App.css';
import Router from './Router'
import {
  BrowserRouter 
} from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/header/Header'

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // check if item is already in cart
    const alreadyInCart = cartItems.find((item) => item.id === product.id)
    /* if set cart items to a map of everything, for item that are not the product clicked on, leave them alone. For the item that is the product clicked on, increment its quantity by one */
      if (alreadyInCart) {
        setCartItems(cartItems.map(item => item.id === product.id ? {...alreadyInCart, quantity: alreadyInCart.quantity + 1 } : item))
         /* YOU need this else block. Else, add item to the cart array and initialize its quanity to one*/
      } else {
    setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
  }

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res =>  setProducts(res.data))
      .catch(error => console.log("There was an error", error)) 

  },[])
  return (
  <BrowserRouter>
    <Header cartItems={cartItems} />
    <Router products={products} handleAddToCart={handleAddToCart} handleDelete={handleDelete} cartItems={cartItems}/>
  </BrowserRouter>
  );
}

export default App;
