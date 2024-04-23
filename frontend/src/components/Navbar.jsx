import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory, Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'



const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        dispatch(logout())
    }

  return (
    <>
    <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="Search Spotify" />
    </div>
    <div className="avatar">
        <a href="#">
           <CgProfile />
           <span>{userInfo?.name}</span> 
        </a>
    </div>
    </>
  )
}

export default Navbar