import { useState, useEffect } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Signin from "./components/Signin"
import Signup from './components/Signup'
import UpdateUserProfile from './components/UpdateUserProfile'
import Home from './pages/Home'
import Genre from './components/Genre'
import Navbar from './components/Navbar'

function App() {
const [user, setUser] = useState(null)
const logout = () => {

}
    return (
        <>
    <Navbar user={user} onLogout={setUser}/>
        <Routes>
         {!user &&
            <Route path="/" element={<Home />} />
         }
        <Route path="/signin" element={<Signin onSignin={ setUser }/>} />
        <Route path="/signup" element={<Signup onSignup={ setUser }/>} />
        {user && (
            <>
            <Route path="/" element={<Genre />} />
            <Route path="/updateProfile" element={<UpdateUserProfile user={user} />} />
            </>
         )}
        </Routes>
        </>
    )
}


export default App
