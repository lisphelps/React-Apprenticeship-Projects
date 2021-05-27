/* eslint-disable no-console */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import nookfloat from './nookfloat.gif';
import { AuthContext } from '../api/Authentication';

export default function Navbar() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const user = localStorage.getItem('user');
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear('user');
  };
  console.log(user);
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
          <NavLink className="navlink" activeClassName="navactive" to="/testimonials">Testimonials</NavLink>
        </li>
        <li>
          <NavLink className="navlink" activeClassName="navactive" to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/Logout" onClick={logout}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
}
