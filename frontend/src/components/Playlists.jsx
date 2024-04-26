import React, { useEffect } from 'react'
import { useStateProvider } from '../utility/StateProvider'
import axios from 'axios'

const Playlists = () => {
    const [{ token, playlists }, dispatch] = useStateProvider()
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get('https://api.spotify.com/v1/me/playlist', {
                headers: {
                    Authorization: 'Bearer '+token,
                    'Content-Type': 'application/json',
                },
            })
            const { items } = response.data
            const playlists = items.map(({name, id}) => {
                return { name, id }
            })
            dispatch({ type:reducerCases.SET_PLAYLISTS, playlists })
        }
        getPlaylistData()
    }, [token, dispatch])

  return (
    <div>
        <ul>
            {
                playlists.map((name, id) => {
                    return (
                        <li key={id}>{name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Playlists