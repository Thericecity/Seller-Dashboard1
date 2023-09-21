
import React, { useState } from 'react'
import styles from "./Login.module.css"

const Loginpage = () => {
  const [email, setEmail]=useState("")
  const [err,setErr]=useState("");
  const [pass,setPass]=useState();
const handleForm=(e)=>{
  e.preventDefault();
  



if(email === ""){
  setErr("Email can't be empty")
}

};
  return (
    <div>
      <form className={styles.logincontain} onSubmit={handleForm}>
          
          <div className={styles.emaildiv}>
          <h2>Login</h2>
  
         
  
  
         
  
          <div className={styles.emailhead}><p>Email</p> </div>
  
          <div className={styles.email}> 
     
            <input type="email" placeholder='Enter your email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <h5 style={{color:"red", marginLeft:"30%", fontSize:"10px"}}>{err}</h5>
           </div>
           <div className={styles.passhead}><p>Password</p> </div>
  
          <div className={styles.pass}>
  
          <input type="password" placeholder='Enter your password' onChange={(e)=>{setPass(e.target.value)}}/>
  
          </div>
  
  
  
          <div className={styles.submit}>
              <input type="submit"/>
              </div>
  
             
  
            
          </div>
        </form>
    </div>
  )
}

export default Loginpage
