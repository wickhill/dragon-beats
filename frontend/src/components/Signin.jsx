import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = ({ onSignin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSignin = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:3000/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });
      const accessToken = ' ';
      const res = await response.json()
      console.log(res)
      // Call the onSignIn function passed from the parent component
      onSignin(res.user);
      localStorage.setItem('token', res.token)
  navigate("/")
    };
    return (
      <div className="pt-[200px]">
        <div className="max-w-[1400px] my-0 mx-auto">
        <h2>Sign In</h2>
        <form onSubmit={handleSignin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      </div>
    );
  };

 

export default Signin