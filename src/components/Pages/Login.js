 import React, { useState } from 'react'
 
 const Login = () => {
    const[token,setToken]=useState("false");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const emailChange=(event)=>{
        setEmail(event.target.value);
    }
    const passwordChange=(event)=>{
        setPassword(event.target.value);

    const submit=()=>{
        event.preventdefault();
        const loginuser={
            email:email,
            password:password,
        }
        setEmail("");
        setPassword("");
        UserLogin(loginuser);
    }  
    
    const Userlogin=async(loginuser)=>{
      const response=fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeMKC3JVQQRqJtvlEAPGNx9o2FM6FEE74',{
        method:"POST",
        body:JSON.stringify(loginuser),
        headers:{
            'Content-Type':'Application/json'
          },
      })
      const data=await response.json();
      if(data.ok){
        setToken(true);
       }
       else{
        console.log("error")
       }
      
    }
   }
   return (
     <section>
     <form onSubmit={submit}>
     <div>
        <span>
            <label htmlFor='email'>Email</label>
        </span>
        <input type='email' value={email} onChange={emailChange}/>
     </div>
     <div>
     <span>
            <label htmlFor='Password'>Password</label>
        </span>
        <input type='password' value={password} onChange={passwordChange}/>
     </div>
      <button>Login</button>
     </form>
     </section>
    
   )
 }
 
 export default Login
 