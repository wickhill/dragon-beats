import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, loadingAction, getSpotifyPage, callback} from '../store/action/userAction';
import { useParams, useLocation } from 'react-router-dom'

const Signin = ({ onSignin }) => {
  console.log(useParams())
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  console.log(code, queryParams, 777);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  const dispatch = useDispatch()
    const handleSignin = async (e) => {
      e.preventDefault();
      dispatch(loadingAction())
      const status = dispatch(login({
        username, password
      }))
      dispatch(getSpotifyPage())
      // dispatch(callback())
      const cookies = document.cookie.split('; ');
      const cookieObject = {};
    
      cookies.forEach(cookie => {
        const [name, value] = cookie.split('=');
        cookieObject[name] = value;
      });
      console.log(cookieObject)
      dispatch(loadingAction())
      // // Here you would typically perform authentication with the Spotify API
      // const response = await fetch('http://localhost:3000/user/signin', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     username,
      //     password
      //   })
      // });
      // const accessToken = ' ';
      // const res = await response.json()
      // console.log(res)
      // // Call the onSignIn function passed from the parent component
      // onSignin(accessToken);
    };
    useEffect(() => { 
   if(code) {
    dispatch(callback())}
    }
      , [code])  

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