import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { signup, loadingAction, getSpotifyPage} from '../store/action/userAction';


const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch =useDispatch()

  const handleSignup = async (e) => {
    e.preventDefault();;
    dispatch(loadingAction())
    const status = dispatch(signup({
      username, password
    }))
    dispatch(getSpotifyPage())
    dispatch(loadingAction())

    // Here you would typically perform sign-up logic
    // For demonstration, let's assume sign-up is successful
    // const response = await fetch('http://localhost:3000/user/signup', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
          
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password
    //     })
    //   });
    //   const accessToken = ' ';
    //   const res = await response.json()
    //   console.log(res)
    //   // Call the onSignIn function passed from the parent component
    //   onSignup(accessToken);
  };

  return (
    <div>
      <h2>Sign Up for Your Spotify Account</h2>
      <form onSubmit={handleSignup}>
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
  );
};

export default Signup;
