import "./success.css"
import "../cart/Cart.css"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className="empty-cart">
       <h1>Thank you for your purchase!</h1>
      <Link to="/"><button className="go-back">Continue Shopping</button></Link>
    </div>
  )
}

export default Success