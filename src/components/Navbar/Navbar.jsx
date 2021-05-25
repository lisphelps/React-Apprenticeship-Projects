import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import nookfloat from './nookfloat.gif';

export default function Navbar() {
  const user = localStorage.getItem('name');
  return (
    <div className="nav">
      <img id="nook" src={nookfloat} alt="Nook" />
      <h1>
        Howdy,
        {' '}
        {user}
      </h1>
      <ul>
        <li>
          <NavLink className="navlink" activeClassName="navactive" to="/Main">Testimonials</NavLink>
        </li>
        <li>
          <NavLink className="navlink" activeClassName="navactive" to="/Shop">Shop</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/Logout">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}
