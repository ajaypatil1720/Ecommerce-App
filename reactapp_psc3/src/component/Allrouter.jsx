import React from 'react';
import {Routes,Route} from 'react-router-dom';
import About from '../pages/About';
import Cart from '../pages/cart';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Pagenotfound from '../pages/Pagenotfound';
import Product from '../pages/Product';
import Formnew from '../pages/signup';
import Singlepageapp from '../pages/Singlepageapp';
import PrivateRoute from './PrivateRoute';



const Allrouter = () => {
  return (
    <Routes>

<Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}> </Route>
<Route path='/about' element={<PrivateRoute><About/></PrivateRoute>}> </Route>
<Route path='/contact' element={<Contact/>}> </Route>
<Route path='/product' element={<Product/>}> </Route>
<Route path='/login' element={<Login/>}> </Route>
<Route path='/*' element={<Pagenotfound/>}> </Route>
<Route path='/signin' element={<Formnew/>}> </Route>
<Route path='/product/:pro_id' element={<PrivateRoute><Singlepageapp/></PrivateRoute>}> </Route>

<Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>}></Route>


    </Routes>  
    )
}

export default Allrouter