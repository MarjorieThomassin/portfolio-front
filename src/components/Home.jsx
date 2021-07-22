import React from 'react';
// import Navbar from './Navbar.jsx';
import { NavLink } from 'react-router-dom';
import profilepic from '../assets/profilepic.jpg';
import '../css/Home.css';

function Home() {
  return (
      <>
        <div className="firstHomeContainer">
            <img className="avatar" src={profilepic} alt="" />
            <ul className="infoProfile">
                <li className="infoList">Marjorie Thomassin</li>
                <li className="infoList">Web developer</li>
            </ul>
        </div>
        <div className="secondHomeContainer">
          <p className="descriptionParagraph">I mainly work with <span className="wordColor">React</span> for the front-end and for the backend
            I mainly work with <span className="wordColor">Nodejs</span> and <span className="wordColor">MySQL</span>. But currently
             I&apos;m working and learning <span className="wordColor">PHP</span> and <span className="wordColor">Symfony</span>. If you wanna see more
            about my work you can see them on the <NavLink type="button" activeClassName="active" className="linkParagraph" exact to="/projects">Projects</NavLink> page, or on my Github,
            the link is on the footer of the page. If you have any questions,
            you can <NavLink type="button" activeClassName="active" className="linkParagraph" exact to="/contact">contact me !</NavLink> </p>
            <ul className="displaySoftSkills">
              <li className="titleSkills">My values at work are :</li>
              <li className="softSkills">Team work</li>
              <li className="softSkills">Adaptability</li>
              <li className="softSkills">Perseverance</li>
              </ul>
        </div>
        </>
  );
}

export default Home;
