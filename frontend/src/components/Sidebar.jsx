import React from 'react'
import { IoLibrary } from 'react-icons/io5'
import { MdHomeFilled, MdSearch } from 'react-icons/md'
import { useSelector } from 'react-redux'
const Sidebar = () => {
    const user = useSelector(state=> state.session.user)
    console.log(user)
  return (
    <>
    <div className="top_playlists">
        <div className="logo">
            <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
            alt="spotify"
            />
        </div>
        <ul>
            <li>
                <MdHomeFilled />
                <span>Home</span>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <MdSearch />
                <span>Search</span>
            </li>
            <li>
                <IoLibrary />
                <span>Your Library</span>
            </li>
        </ul>
    </div>
    {/* <Playlists /> */}
    </> 
  )
}

const Container = styled.div`
    background-color: black;
`;

export default Sidebar