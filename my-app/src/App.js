
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { CartProvider } from './components/context/Cart.Context';

function App() {
  return (
    <div> 
  <BrowserRouter>
  <CartProvider>
   <Navbar />
   <Routes>
    <Route path='/' element={<ItemListContainer/>}/>
    <Route path='/category/:categoryId' element={<ItemListContainer/>} />
    <Route path= '/item/:itemId' element={ <ItemListContainer/>}/>
    <Route path ='*' element ={<h1> 404 NOT FOUND</h1>} />
    <Route path='/checkout'element ={<Checkout/>}/>
    <Route path ='/cart' element = {<Cart />} /> 
   </Routes>
   </CartProvider>
   </BrowserRouter>
    </div>
  
  );
}

export default App;
