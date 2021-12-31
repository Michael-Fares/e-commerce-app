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
        <h1 className="app-name">Fusion Fashion</h1>
        <nav>
          <ul className="links">
            <Link to="/">
              <li><FontAwesomeIcon icon={faStore} /><span>Store</span></li>
            </Link>
            <Link to="/cart"><li><FontAwesomeIcon icon={faShoppingCart} />
            
            <span>Cart</span>
            {itemCount > 0 && <span className="cart-total">{itemCount}</span>}
            </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;