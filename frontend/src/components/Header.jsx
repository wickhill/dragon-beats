import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/logo.png';

const Header = () => {
  const currentUser = true; 

  return (
    <header className="fixed py-10 bg-sky-200 top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a className="flex gap-4 items-center" href="/profile">
          <img className="rounded-full w-16 h-16" src={logo} alt="Company Logo" />
          <h1 className="text-[36px] font-bold">Dragon Beats Music App</h1>
        </a>
        {currentUser && (
        <Navbar />
        )}
      </div>
    </header>
  );
};

export default Header;