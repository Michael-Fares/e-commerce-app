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
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => setProducts(res.data))
      .catch(error => console.log("There was an error", error)) 

  },[])
  return (
  <BrowserRouter>
    <Header />
    <Router products={products}/>
  </BrowserRouter>
  );
}

export default App;
