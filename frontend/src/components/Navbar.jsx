import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import logo from '../assets/logo.jpg'
import Logout from './Logout'

const Navbar = ({ user, onLogout}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-400 shadow z-50">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        {/* Centered Logo and App Name */}
        <Link to="/" className="flex justify-center items-center mx-auto sm:pl-40">
          <img src={logo} className="h-8 mr-2" alt="Logo" />
          <span className="text-xl font-semibold text-gray-900">DragonBeats</span>
        </Link>

        {/* Right-aligned sign-in/sign-up links */}
        <div className="flex items-center space-x-3">
          {user ? (
            <div className="relative">
              <button onClick={handleToggleDropdown} type="button" className="text-sm rounded-full focus:ring-4 focus:ring-gray-300">
                <CgProfile className="text-gray-600 h-8 w-8" />
              </button>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link to="/updateProfile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                    <Logout onLogout={onLogout}  />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup" className="text-gray-900 font-bold bg-teal-400 hover:bg-teal-700 px-4 py-2 rounded">
                Sign Up
              </Link>
              <Link to="/signin" className="text-gray-900 font-bold bg-teal-400 hover:bg-teal-700 px-4 py-2 rounded">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;