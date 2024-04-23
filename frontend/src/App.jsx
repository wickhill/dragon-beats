import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Auth from "./components/Auth"
import Spotify from "./components/Spotify"

function App() {
    const [user, setUser] = useState(null)
    return (
        <>
        <h1>Dragon Beats App!</h1>
        <div>
            <Navbar />
            {
            <Auth user={user} setUser={setUser} />
            }
            <Footer />
        </div>
        </>
    )
}

export default App
