import React from 'react'

const Sidebar = () => {
  return (
    <Container>
    <div className="top_playlists">
        <div className="logo">
            <img>
            {/* Need logo image */}
            </img>
        </div>
        <ul>
            <li>
                <span>Home</span>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <span>Search</span>
            </li>
            <li>
                <span>Your Library</span>
            </li>
        </ul>
    </div>
    <Playlists />
    </Container>
  )
}

export default Sidebar