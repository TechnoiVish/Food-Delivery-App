import React, { useContext, useState } from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { assets } from '../../src/assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../src/Context/StoreContext';
const Navbar = ({setShowLogin}) => {

  const[hamOpen,setHampOpen]=useState(false);
  const [menuBar,setmenuBar]=useState("Home");
  const {getTotalCartAmount}=useContext(StoreContext);
   return (
   <>
  
    <div className='navbar'>
<Link to='/'><img src={assets.logo} className='logo' /></Link>

<div className="hamburger" onClick={()=>{setHampOpen(!hamOpen)}}>
  <span></span>
  <span></span>
  <span></span>
</div>
<ul id="navbar-menu" className={hamOpen?"open":""}>
    <Link to='/' onClick={()=>setmenuBar("Home")}className={menuBar==='Home'?'active':''} id='home'> Home </Link>
    <a href='#explore-menu' onClick={()=>setmenuBar("menu")}className={menuBar==='menu'?'active':''}>menu</a>
    <a href='#app-download' onClick={()=>setmenuBar("mobile-app")}className={menuBar==='mobile-app'?'active':''}>mobile-app</a>
    <a href='#footer' onClick={()=>setmenuBar("contact-us")}className={menuBar==='contact us'?'active':''}>contact us</a>
</ul>
<div id="navbar-right" className={hamOpen?"open":""}>
   
    <img src={assets.search_icon} className='search' />
    <div className="navbar-search-icon">
      <Link to ='/cart'> <img src={assets.basket_icon} alt="" /></Link>
        <div  className={getTotalCartAmount()===0?"":"dot"}></div>
    </div>
    <button onClick={()=>setShowLogin(true)}className='bg-transparent fs-6 px-4 py-1 rounded-5'>Sign In</button>
</div>




    </div>
    </>
  )
}
export default Navbar
