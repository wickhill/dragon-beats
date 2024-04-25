import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Signup = ({ onSignup }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();;
    const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          
        },
        body: JSON.stringify({
          email,
          username,
          password
        })
      });
      const accessToken = ' ';
      const res = await response.json()
      // Call the onSignIn function passed from the parent component
      onSignup(res.user);
      localStorage.setItem('token', res.token)
      navigate("/")
  };

  return (
    <div className="pt-[200px]">
     <div className="max-w-[1400px] my-0 mx-auto">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
      <div>
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
