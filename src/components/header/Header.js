import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faStore
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartItems }) => {
  const itemCount = cartItems.map(item => item.quantity).reduce((current,next) => current + next, 0)
  console.log(itemCount)
  return (
    <>
      <header className="app-header">
        <h1 className="app-name">Fusion Fashions</h1>
        <nav>
          <ul className="links">
            
            <li><Link to="/"><FontAwesomeIcon icon={faStore} /><span>Store</span></Link></li>
            
            <li><Link className="cart" to="/cart"><FontAwesomeIcon icon={faShoppingCart} />
            
            <span className=".cart">Cart</span>
            {itemCount > 0 && <span className="cart-total">{itemCount}</span>}
            </Link>
            </li>
           
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;