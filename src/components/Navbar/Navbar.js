import React from 'react';
import { FaBars } from 'react-icons/fa'; 
import './Navbar.css'; 
import image from '../assets/image.jpeg'

// Functional component for the Navbar to add date 
const Navbar = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <nav className="navbar">
      <div className="left">
        <FaBars className="icon" />
        <select>
          <option value="option1">Please Select</option>
          <option value="option2">Option2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="date">{currentDate}</div>
      </div>
      <div className="center">STOREMATE</div>
      <div className="right">
        <img src={image} alt="User" className="user-image" />
        <img src={image} alt="User" className="user-image" />
        <img src={image} alt="User" className="user-image" />
        <img src={image} alt="User" className="user-image" />
        <img src={image} alt="User" className="user-image" />
        <img src={image} alt="User" className="user-image" />
        <div className="username">Attanayenaka</div>
        <img src={image} alt="User" className="user-image" />
      </div>
    </nav>
  );
};

export default Navbar;
