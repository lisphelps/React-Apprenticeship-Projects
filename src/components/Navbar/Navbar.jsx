import React from 'react';
import { Router, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <Router>
        <h2>Welcome, User</h2>
        <ul>
          <li>
            <Link className="link" to="/Main">Testimonials</Link>
          </li>
          <li>
            <Link className="link" to="/Shop">Shop</Link>
          </li>
          <li>
            <Link className="link" to="/Login">Logout</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}
