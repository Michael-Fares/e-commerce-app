import React from 'react'
import './Products.css'

const Products = ({products, handleAddToCart}) => {
  console.log(products, 'products')
  return (
    <ul className="products-container">
      {products.map(product => {
        return (
          <li className="product-card" key={product.id}>
            <h4 className="product-name">{product.title}</h4>
            <img className="product-image" src={product.image} alt={product.title}/>
            <h4 className="product-price">{`$${product.price.toFixed(2)}`}</h4>
            <p className="product-description">{product.description}</p>
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>add to cart</button>
          </li>
        )
      })}
    </ul>
  )
} 

export default Products;