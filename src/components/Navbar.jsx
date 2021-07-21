import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink type="button" activeClassName="active" className="adminLink" exact to="/login">Admin</NavLink>
    </div>
    <nav className="navBar">
        <ul className="displayLinks">
        <NavLink type="button" activeClassName="active" className="links" exact to="/"><li className="links">Home</li></NavLink>
        <NavLink type="button" activeClassName="active" className="links" exact to="/"><li className="links">Projects</li></NavLink>
        <NavLink type="button" activeClassName="active" className="links" exact to="/"><li className="links">About me</li></NavLink>
        <NavLink type="button" activeClassName="active" className="links" exact to="/"><li className="links">Contact</li></NavLink>
        </ul>
    </nav>
</div>
  );
}

export default Navbar;
