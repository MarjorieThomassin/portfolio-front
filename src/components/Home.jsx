import React from 'react';
// import Navbar from './Navbar.jsx';
import profilepic from '../assets/profilepic.jpg';
import Navbar from './Navbar.jsx';
import '../css/Home.css';

function Home() {
  return (
      <>
        <Navbar />
        <div className="firstHomeContainer">
            <img className="avatar" src={profilepic} alt="" />
            <ul className="infoProfile">
                <li className="infoList">Marjorie Thomassin</li>
                <li className="infoList">Web developer</li>
            </ul>
        </div>
        </>
  );
}

export default Home;