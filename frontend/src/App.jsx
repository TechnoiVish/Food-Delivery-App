import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from '../Components/Pages/Home/Home'
import Cart from '../Components/Pages/Cart/Cart'
import Placeorder from '../Components/Pages/Placeorder/Placeorder'
import Footer from '../Components/Footer/Footer'
import AppDownload from '../Components/AppDownload/AppDownload'
import LoginPopUp from '../Components/LoginPopUp/LoginPopUp'
import MyOrders from '../Components/Pages/MyOrders/MyOrders'
const App = () => {
  const[showLogin,setShowLogin] =useState(false)
  return (
    <>
   {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Placeorder' element={<Placeorder/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <AppDownload/>
    <Footer/>
    </>
  )
}

export default App
