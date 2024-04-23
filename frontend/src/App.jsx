import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Auth from "./components/Auth"
import Spotify from "./components/Spotify"
import Signin from "./components/Signin"

function App() {
    useEffect(() => {
        const hash = window.location.hash
        console.log(hash)
    })

    return (
        <>
        <h1>Dragon Beats App!</h1>
        <div>
            <Signin />
        </div>
        </>
    )
}

export default App
