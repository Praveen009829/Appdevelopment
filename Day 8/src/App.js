
import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom'
import Card from './Components/Checkout/Card'
import Payment from './Components/Checkout/Payment'
import { Cartpage } from './Pages/Cartpage'
import { ComputerGlasses } from './Pages/ComputerGlasses'
import { Eyeglasses } from './Pages/Eyeglasses'
import { Homepage } from './Pages/Homepage'
import SingleProduct from './Pages/SingleProduct'
import { Sunglasses } from './Pages/Sunglasses'
import { WishList } from './Pages/WishList'
import Termsandconditions from './Components/Termsandconditions';
import PrivacyPolicy from './Components/Privacy';
import ContactUs from './Components/ContactUs';
import FAQ from './Components/products/FAQ';
function App() {
  return (

    <div className="App">
      <Navbar/>
      <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/Computerglasses' element={<ComputerGlasses/>}></Route>
            <Route path='/Eyeglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/Sunglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/Computerglasses/:id' element={<SingleProduct/>}></Route>
            <Route path='/Eyeglasses' element={<Eyeglasses/>}></Route>
            <Route path='/Sunglasses' element={<Sunglasses/>}></Route>
            <Route path='/cart' element={<Cartpage/>}></Route>
            <Route path='/wishlist' element={<WishList />} ></Route>
            <Route path='/shipping' element={<Payment />} ></Route>
            <Route path='/payment' element={<Card/>}/>
            <Route path='/tandc' element={<Termsandconditions/>}/>
            <Route path='/privacy' element={<PrivacyPolicy/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/faq' element={<FAQ/>}/>
        </Routes>
     
     <Footer/>
    </div>
  );
}

export default App;





