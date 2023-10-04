import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {

  const [un, setUN] = useState('')
  const [pass, setPass] = useState('')
  const {setUser} = useContext(UserContext)

  const handleSubmit= (e)=> {
    e.preventDefault()
    setUser({un,pass})


  }
  return(
  
  <div>
   <h2> Login </h2> 
   <input type= 'text' placeholder="username" 
   value={un}
   onChange={(e)=> setUN(e.target.value)}/>

   {"    "}
   <input type="text" placeholder="password"
   value={pass}
   onChange={(e)=> setPass(e.target.value)} />

   <button onClick={handleSubmit} >Submit </button>
    
    </div>
  )
}

export default Login;
