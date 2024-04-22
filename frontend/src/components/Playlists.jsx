import { useEffect } from 'react'
import React from 'react'

const Playlists = () => {
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await fetch('http://localhost:3000/playlists', {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            console.log(response)
        }
        getPlaylistData()
    }, [token, dispatch])
  return (
    <div>Playlists</div>
  )
}

export default Playlists