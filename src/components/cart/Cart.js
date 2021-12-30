import React from 'react'
import { Link } from 'react-router-dom' 
import './Cart.css'

const Cart = ({cartItems}) => {
  console.log('cart items', cartItems)
  return (
  <>
    <h2>Cart Summary:</h2>
    {cartItems.length ? 
    <ul>
    {cartItems.map(item => {
      return (
       <li className="cart-item-card">
         <img className="cart-item-image" src={item.image} alt={item.title}/>
         <div>
          <p className="cart-item-name">{item.title}</p>
          <div className="quantity-actions">
            <p className="cart-item-quanitity">{`Quantity: ${item.quantity}`}</p>
            <button className="quantity-button decrease">-</button>
            <button className="quantity-button increase">+</button>
            {item.quantity === 1 && <button className="delete">Remove</button>}
          </div>
         </div>
       </li>
      )
    })}
     </ul>
     :
     <div className="empty-cart">
      <h2>There are no items in your cart</h2>
      <Link to="/"><button className="go-back">Go back to store</button></Link>
     </div>} 
  </>
  )
} 

export default Cart;