import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import AuthPage from "./components/Auth"
import Genre from './components/Genre'
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
