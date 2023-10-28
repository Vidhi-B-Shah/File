import React from 'react';
import './App.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="/FileS-logos_white.png" alt="Logo" className="navbar-logo" />
            </div>
            <div className="navbar-right">
                <a href="#" className="navbar-item">Home</a>
                <a href="#" className="navbar-item">My Files</a>
                <a href="#" className="navbar-item">Shared</a>
                <a href="#" className="navbar-item">Trash</a>
                <a href="#" className="navbar-item">Settings</a>
            </div>
        </div>
    );
}

export default Navbar;
