import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import Auth from "./components/Auth"
import Spotify from "./components/Spotify"
import Signin from "./components/Signin"
import Signup from './components/Signup'
import Genre from './components/Genre'
import Playlists from './components/Playlists'
import Sidebar from './components/Sidebar'


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
            <Signup />
            {/* <Sidebar />  */}
            {/* <Genre />
            <Playlists /> */}
        </div>
        </>
    )
}

export default App
