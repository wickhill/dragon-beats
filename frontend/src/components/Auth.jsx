import React from 'react'
import { useState } from 'react'

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json()
    props.setUser(data.user)
    localStorage.setItem('token', data.token)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()
      props.setUser(data.newUser)
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }
    return (
      <div>
        {
          showLogin?
          <section>
            <h2 onClick={() => setShowLogin(!showLogin)}>Login <small>Switch to Signup</small></h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              handleLogin()
            }}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
              <button type="submit">Login</button>
            </form>
          </section>:
          <section>
            <h2 onClick={() => setShowLogin(!showLogin)}>Signup <small>Switch to Login</small></h2>
            <form onSubmit={(e) => {
              e.preventDefault()
              handleLogin()
            }}>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
              <button type="submit">Sign Up</button>
            </form>
          </section>
        }
      </div>
  )
}

export default Auth

