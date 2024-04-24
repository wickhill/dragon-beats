import { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import AuthPage from "./components/Auth"
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Tracks } from './components/Tracks'

// Helper function to configure Spotify API headers
const getHeaders = (accessToken) => ({
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
});

function App() {
    const [user, setUser] = useState(null)
    const [tracks, setTracks] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [token, setToken] = useState('');

    const handleChange = (event) => {
        const searchTerm = event.target.value
        console.log(searchTerm)
        setSearchTerm(searchTerm)
        // setTracks(tracks.filter(track => track.Id.toLowerCase().includes(searchTerm.toLowerCase())))
      }

      const handleSubmit = (event) => {
        event.preventDefault()
        console.log('form submitted')
        fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
            headers: {
                'Authorization': `Bearer ${token}`}
        })
        .then(res=> res.json())
        .then(data => {
          console.log(data)
          if(data.tracks){
            setTracks(data.tracks.items)
          }
        })
      }

      useEffect(() => {
        if (searchTerm && token) {
            fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.tracks) {
                    setTracks(data.tracks.items);
                }
            })
            .catch(error => console.error('Unable to fetch data: Tracks Search', error));
        }
    }, [searchTerm, token]);
    

    return (
        <>
        <h1>Dragon Beats App!</h1>
        <div>
            <Navbar />
            <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Tracks tracks={tracks} />
            {
            <Auth user={user} setUser={setUser} />
            }
            <Footer />
        </div>
        </>
    )
}

export default App
