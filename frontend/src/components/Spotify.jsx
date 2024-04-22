import React from 'react'

const Spotify = () => {
  return (
    <div className="spotify_body">
        <Sidebar />
        <div className="body">
            <Navbar />
            <div className="body_contents">
                <Body />
            </div>
        </div>
        <div className="spotify_footer">
            <Footer />
        </div>
    </div>

  )
}

export default Spotify