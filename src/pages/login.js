import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)

  const onLogin = () => {
    localStorage.setItem('isLogin', true)
    setIsLogin(true)
  }

  if (isLogin) {
    return (
      <Redirect to={{ pathname: '/home' }} />
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span 
        className="badge badge-succes"
        style={{ fontSize: 18, marginBottom: 10 }}
      >
        Click the button below to Login
      </span>
      <button 
        type="button" 
        className="btn btn-success"
        style={{ maxWidth: 100 }}
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}

export default Login