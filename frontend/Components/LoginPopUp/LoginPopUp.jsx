import React, {  useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../src/assets/assets.js';
import axios from 'axios';
import { StoreContext } from '../../src/Context/StoreContext'



const LoginPopUp = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext)
    const [currState,setCurrState]=useState("Sign Up")

    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
   
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    const onLogin = async(event)=>{
    
        event.preventDefault();
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="/api/user/login"
        }
        else{
            newUrl+="/api/user/register"
        }
const response=await axios.post(newUrl,data);
if(response.data.success){
    setToken(response.data.token);
    localStorage.setItem("token",response.data.token);
    setShowLogin(false)
}
else{
    alert(response.data.message)
}
        
    }
          
  return (
    <div className='login-popup'>
<form onSubmit={onLogin} className='login-popup-container'name="login-form">
    <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />

    </div>
    <div className="login-popup-inputs">
        {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter Your Name" required />
}
        <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Enter Email" required />
        <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required />
    </div>
<button type='submit' >{currState==="Sign Up"?"Create account":"login"}</button>
<div className="login-popup-condition">
    <input type="checkbox" required />
    <p>Agree privacy and policy to continue sign up.</p>

</div>
{currState==="Login"?
<p>Create new account? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
:
<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>

}
</form>
    </div>
  )
}

export default LoginPopUp
