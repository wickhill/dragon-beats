import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import img3 from '../assets/vinyl.jpeg'
import { FaSpotify } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"

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
      <div className="pt-[0px] relative w-full h-screen bg-zinc-700/90">
            <img className="absolute w-full h-full object-cover mix-blend-overlay" src={img3} alt='' />
        <div className="flex justify-center items-center h-full">
        <form className= "max-w-[400px] w-full mx-auto bg-white p-8" onSubmit={handleSignin}>
        <h2 className="text-4xl font-bold text-center py-6">Sign In</h2>
        <div className="flex justify-between px-6 py-8">
        <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center"><FaSpotify />Spotify</p>
        <p className="border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center"><FaGithub />Github</p>
      </div>
          <div className="flex flex-col px-1 py-2 mb-1">
            <label htmlFor="username">Username:</label>
            <input className="border relative bg-gray-100 p-1"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col px-1 py-2 mb-1">
            <label htmlFor="password">Password:</label>
            <input className="border relative bg-gray-100 p-1"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full py-3 mt-4 bg-gray-400 hover:bg-gray-300 relative" type="submit">Sign In</button>
        </form>
      </div>
      </div>
    );
  };

 

export default Signin