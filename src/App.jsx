import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Index from './Components/Pages/Index';
import ProductDetails from './Components/Pages/ProductDetails';
import Whishlist from './Components/Pages/Whishlist';
import Cart from './Components/Pages/Cart';
import Checkout from './Components/Pages/Checkout';
import Footer from './Components/Footer/Footer';
import About from './Components/Pages/About';
import Shop from './Components/Pages/Shop';
import Stores from './Components/Pages/Stores';
import Blog from './Components/Pages/Blog';
import Contact from './Components/Pages/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/wishlist' element={<Whishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
