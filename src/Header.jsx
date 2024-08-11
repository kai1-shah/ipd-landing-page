import React from 'react';
import './Header.css'; // Import the CSS file
import logo from './assets/logo.png'; // Adjust the path to your logo image

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" /> {/* Logo on the extreme left */}
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Try for Free</a></li>
                </ul>
            </nav>
            <div className="dropdown-icon">&#9776;</div> {/* Dropdown icon */}
        </header>
    );
};

export default Header;