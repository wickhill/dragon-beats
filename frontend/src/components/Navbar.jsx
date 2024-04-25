import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'


const Navbar = ({ user }) => {
  const [menu, setMenu] = useState(false)

  const handleLogout = () => {

  }

  return (

    <div className="fixed h-[80px] top-0 right-0 left-0 bg-blue-700">
      <div className="max-w-[1400px] my-0 mx-auto">
        <div className="">
        <h1>Dragon Beats App!</h1>
        {!user && <>
          <Link to="/">Home</Link>
          <Link to="/signin">Singin</Link>
          <Link to="/signup">Singup</Link>
        </>}
        {user && <>
          <Link to="/">Genre</Link>
          <button onClick={handleLogout}>logout</button>
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

export default Navbar