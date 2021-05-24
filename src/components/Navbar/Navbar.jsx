import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <h2>Howdy, User</h2>
      <ul>
        <li>
          <NavLink className="navlink" to="/Main">Testimonials</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/Shop">Shop</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/">Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}
