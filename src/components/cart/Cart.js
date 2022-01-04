import React from 'react'
import { Link } from 'react-router-dom' 
import './Cart.css'
import axios from 'axios'

const Cart = ({cartItems, handleDelete, handleIncrement, handleDecrement}) => {
  const totalPrice = cartItems.map(item => item.price * item.quantity).reduce((current, next) => current + next, 0)
  
  // send only the item id and the quantity to the server. NOT the price. Price in cents verified on server.
  const checkoutItemsToServer = cartItems.map(item => {
    return {
    id: item.id, 
    quantity: item.quantity
  }
  })

  const handleCheckout = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4001/create-checkout-session', {
      checkoutItemsToServer
    })
      .then(res => console.log(res.data))
      .catch(error => console.log('There was an error', error))
  }

  return (
  <>
   
    {cartItems.length ? 
    <>
    <div className="cart-header">
      <div className="cart-summary"> 
        <h2>Cart Summary:</h2>
        <p>{`Total: $${totalPrice.toFixed(2)}`}</p>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
     </div>
    <ul className="cart-item-list">
    {cartItems.map(item => {
      return (
       <li className="cart-item-card" key={item.id}>
         <img className="cart-item-image" src={item.image} alt={item.title}/>
         <div>
          <span className="cart-item-name">{`${item.title}: `}</span>
          <span className="cart-item-price">{`$${item.price.toFixed(2)}`}</span>
          <div className="quantity-actions">
            <p className="cart-item-quanitity">{`Quantity: ${item.quantity}`}</p>
            {item.quantity === 1 ? <button className="delete" onClick={()=>handleDelete(item.id)}>Remove</button> : <button className="quantity-button decrease"
            onClick={()=>handleDecrement(item.id)}>-</button>}
            <button className="quantity-button increase" onClick={()=>handleIncrement(item.id)}>+</button>
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