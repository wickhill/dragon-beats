import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');  // Navigates to the home page when the logo is clicked
    };

    return (
        <nav>
            <div onClick={handleLogoClick}>Logo</div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Navbar;
