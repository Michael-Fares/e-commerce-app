import React from 'react'
import './Products.css'

const Products = ({products}) => {
  console.log(products, 'products')
  return (
    <ul className="products-container">
      {products.map(product => {
        return (
          <li className="product-card" key={product.id}>
            <h4 className="product-name">{product.title}</h4>
            <img className="product-image" src={product.image} alt={product.title}/>
            <h4 className="product-price">{product.price}</h4>
            <p className="product-description">{product.description}</p>
            <div className="product-card-buttons">
              <button>add to cart</button>
            </div>
          </li>
        )
      })}
    </ul>
  )
} 

export default Products;