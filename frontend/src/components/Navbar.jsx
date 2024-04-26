import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import img4 from '../assets/icon.png'


const Navbar = ({ user }) => {
  const [menu, setMenu] = useState(false)

  const handleLogout = () => {

  }

  return (

    <div className="h-[80px] flex justify-between lg:py-5 px-20 py-4 bg-gray-300 relative">
        <div className="flex items-center flex-1">
           <img src={img4} alt="" /> 
        </div>
      <div className="max-w-[1400px] my-0 mx-auto">
        <div className="">
        <h1>Dragon Beats App!</h1>
        {!user && <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
        <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
          <Link to="/">
            <li>Home</li>
            </Link>
          <Link to="/signin">
            <li>Singin</li>
            </Link>
          <Link to="/signup">
            <li>Singup</li>
            </Link>
            </ul>
        </div>
        </div>}
        {user && <>
          <Link to="/">Genre</Link>
          <button onClick={handleLogout}>Logout</button>
        </>}
        {/* <div className="search_bar">
          <FaSearch />
          <input type="text" placeholder="Search Spotify" />
        </div> */}
        <div className="avatar">
        {user && <>
          <Link to="/profile">
            <CgProfile />
            <span>{user?.name}</span>
          </Link>
          </>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar;
