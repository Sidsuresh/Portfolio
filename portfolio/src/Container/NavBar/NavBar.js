import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li><a href='#Profile'> Home </a></li>
                <li><a href='#About'> Resume </a></li>
                <li><a href='#Project'> Projects </a></li>
                <li><a href='#Contact'> Contact Me </a></li>
            </ul>
        </div>
    );
}

export default NavBar;