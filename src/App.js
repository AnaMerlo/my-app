
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer'




function App() {
  
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting = {'Bienvenidos a Librería El Centauro'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/contact' element={<h2>contacto finalizar compra</h2>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
