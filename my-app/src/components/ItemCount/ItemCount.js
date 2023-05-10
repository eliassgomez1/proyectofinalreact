import './ItemCount.css'
import {usestate} from 'react ' 

const ItemCount = ({stock,initial})
    const [quantity, setQuantity ] =useState (initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity (quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity (quantity -1 )
        }
    }

    return ( 
      <div className ='Counter'>
        <div className='Controls'>
            <buttom className='Button' onClick={decrement}>-</buttom>
            <h4 className ='Number'> {quantity}</h4>
            <buttom className='Button' onClick={increment}>+</buttom>
        </div>
        <div>
            <buttom className ='Button' onClick ={() => onAdd (quantity)} disabled= {!stock}>
                agregar al carrito
            </buttom>
        </div>

    </div>
    )
    export default App;