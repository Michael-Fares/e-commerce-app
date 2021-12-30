import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShoppingCart,
  faStore
} from "@fortawesome/free-solid-svg-icons";

const Header = ({ cartItems }) => {
  const itemTotal = cartItems.map(item => item.quantity).reduce((current,next) => current + next, 0)
  console.log(itemTotal)
  return (
    <>
      <header className="app-header">
        <h1 className="app-name">Fusion Fashion</h1>
        <nav>
          <ul className="links">
            <Link to="/">
              <li><FontAwesomeIcon icon={faStore} /><span>Store</span></li>
            </Link>
            <Link to="/cart"><li><FontAwesomeIcon icon={faShoppingCart} />
            
            <span>Cart</span>
            {itemTotal > 0 && <span className="cart-total">{itemTotal}</span>}
            </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;