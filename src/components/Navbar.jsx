import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className="navContainer">
    <div className="navTop">
    <ul className="displaySocial">
            <li className="socialIcons">Github</li>
            <li className="socialIcons">LinkedIn</li>
            <li className="socialIcons">Twitter</li>
        </ul>
        <p className="adminLink">Admin</p>
    </div>
    <nav className="navBar">
        <Router>
        <ul className="displayLinks">
           <li className="links"><NavLink activeClassName="active" to='/'>Home</NavLink></li>
            <li className="links">Projects</li>
            <li className="links">About me</li>
            <li className="links">Contact</li>
        </ul>
        </Router>
    </nav>
</div>
  );
}

export default Navbar;
