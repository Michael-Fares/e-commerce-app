import React from 'react'
import { Link } from 'react-router-dom' 
import './Cart.css'

const Cart = ({cartItems}) => {
  const totalPrice = cartItems.map(item => item.price * item.quantity).reduce((current, next) => current + next, 0)
  return (
  <>
    <h2>Cart Summary:</h2>
    {cartItems.length ? 
    <>
    <div>
      <p>{`Total: $${totalPrice}`}</p>
     </div>
    <ul>
    {cartItems.map(item => {
      return (
       <li className="cart-item-card">
         <img className="cart-item-image" src={item.image} alt={item.title}/>
         <div>
          <span className="cart-item-name">{`${item.title}: `}</span>
          <span className="cart-item-price">{`$${item.price.toFixed(2)}`}</span>
          <div className="quantity-actions">
            <p className="cart-item-quanitity">{`Quantity: ${item.quantity}`}</p>
            {item.quantity === 1 ? <button className="delete">Remove</button> : <button className="quantity-button decrease">-</button>}
            <button className="quantity-button increase">+</button>
          </div>
         </div>
       </li>
      )
    })}
     </ul>
     </>
     :
     <div className="empty-cart">
      <h2>There are no items in your cart</h2>
      <Link to="/"><button className="go-back">Go back to store</button></Link>
     </div>} 
  </>
  )
} 

export default Cart;