import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';
import github1 from '../assets/github1.jpg';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

function Navbar() {
  return (
    <div className="navContainer">
    <div className="navTop">
    <section className="displaySocial">
            <a className="iconLink" target="_blank" href="https://github.com/MarjorieThomassin" rel="noreferrer"><img className="github" src={github1} alt="" /></a>
            <a className="iconLink" target="_blank" href="https://www.linkedin.com/in/marjorie-thomassin-b8659a193/" rel="noreferrer"><img className="linkedin" src={linkedin} alt="" /></a>
            <a className="iconLink" target="_blank" href="https://twitter.com/Midooooona88" rel="noreferrer"><img className="twitter" src={twitter} alt="" /></a>
        </section>
        <NavLink type="button" activeClassName="active" className="adminLink" exact to="/login">Admin</NavLink>
    </div>
    <nav className="navBar">
        <ul className="displayLinks">
        <NavLink type="button" activeClassName="active" className="links" exact to="/"><li className="links">Home</li></NavLink>
        <NavLink type="button" activeClassName="active" className="links" exact to="/projects"><li className="links">Projects</li></NavLink>
        <NavLink type="button" activeClassName="active" className="links" exact to="/contact"><li className="links">Contact</li></NavLink>
        </ul>
    </nav>
</div>
  );
}

export default Navbar;
