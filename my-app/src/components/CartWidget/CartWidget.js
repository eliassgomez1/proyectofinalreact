import { useContext } from 'react'
import cart from './assets/cart.png'

const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)
    return (
       
        <div>
            <img src={cart} alt="cart-widget"/>
            0
     </div>
    )
}

export default CartWidget