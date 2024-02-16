import React, { useState } from 'react'
import './CSS/LoginSignup.css'


const LoginSignup = () => {
  const [state, setState] =useState("Login")

  const [formData, setFormData] =useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }


  const login = async ()=>{
    console.log("LOgin funstion executes", formData)
    let responseData;
    await fetch('https://ecommerce-backend-jp8n.onrender.com/login', {
      method:'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }


  const signup = async ()=>{
    console.log("signup funstion executes", formData)
    let responseData;
    await fetch('https://ecommerce-backend-jp8n.onrender.com/signup', {
      method:'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }

  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name.." id="" />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" id="" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder="Password" id="" />
        </div>  
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I aggree to the terms of use & priacy policy</p>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?<p className='loginsignup-login'>Already have an account <span onClick={()=>{setState("Login")}}>Login here</span></p>:<p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
        
        
      </div>      
    </div>
  )
}

export default LoginSignup