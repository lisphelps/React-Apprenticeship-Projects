import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
// import { pushRotate as Menu } from 'react-burger-menu/lib/menus/pushRotate';
import nookfloat from './nookfloat.gif';
import { AuthContext } from '../api/Authentication';

export default function Navbar() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const user = sessionStorage.getItem('user');
  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear('user');
  };

  return (
    <div className="nav" id="outer-container">
      <img id="nook" src={nookfloat} alt="Nook" />
      <h1>
        Howdy,
        {' '}
        {user}
      </h1>
      <main id="page-wrap">
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
      </main>
    </div>
  );
}
