import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='cover'>
        <h1>Login</h1>
        <input type='text' color='white' placeholder='username'/>
        <input type='password' placeholder='password'/>

        <div className='login-btn'>Login</div>
        <p className='text'>Or Login Using</p>
        <div className='alt-login'>
            <div className='facebook'></div>
            <div className='google'></div>
        </div>
        
      
    </div>
  )
}

export default Login


