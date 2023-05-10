import CartWidget from "../CartWidget/CartWidget"
import './Navbar.css'
import {NavLink,Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="Navbar">
            <Link to ='/'>
                <h3> Ecommerce</h3>
            </Link>
           <div className="Categories">
            <NavLink to={category/zapatillas} className={({isActive}) =>isActive ? 'ActiveOption' : 'Option'}> zapatillas </NavLink>
            <NavLink to={category/hoodies} className={({isActive}) =>isActive ? 'ActiveOption' :'Option'}>Hoodies</NavLink>
            
           </div>
           <CartWidget />
        </nav>
    )
}

export default Navbar 