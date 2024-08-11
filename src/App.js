import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';
import Login from './Component/Login';
import Register from './Component/Register';
import ForgotPassword from './Component/Forgotpassword';

function App() {
  const [cartitems, setcartitems] = useState([]);
  console.log(cartitems);
  
  return (
    <>
      <div className="App">
        <Header cartitems={cartitems} />
        <Routes>

        <Route >
            <Route index element={<Login />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          </Route>

          <Route path="/outlet/home" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/product-detail/:id" element={<ProductDetails cartitems={cartitems} setcartitems={setcartitems} />} />
          <Route path="/cart" element={<Cart cartitems={cartitems} setcartitems={setcartitems} />} />
        </Routes>
        <ToastContainer position='top-center' />
      </div>
      <div style={{
        position: 'fixed', 
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'white', 
        zIndex: 1000, 
      }}>
        <Footer />

      </div>
    </>
  );
}

export default App;
