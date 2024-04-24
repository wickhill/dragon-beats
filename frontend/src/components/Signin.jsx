import React from 'react'
import { useState } from 'react'

const Signin = ({ onSignin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignin = async (e) => {
      e.preventDefault();
      
      // Here you would typically perform authentication with the Spotify API
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
      onSignin(accessToken);
    };
  
    return (
      <div>
        <h2>Sign In to Spotify</h2>
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
    );
  };

export default Signin