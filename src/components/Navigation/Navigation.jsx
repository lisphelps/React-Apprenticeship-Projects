import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { HiOutlineMenu } from 'react-icons/hi';
import nookfloat from './nookfloat.gif';
import { AuthContext } from '../api/Authentication';

export default function Navigation() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const user = sessionStorage.getItem('user');
  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear('user');
  };

  return (
    <div className="nav">
      <img id="nook" src={nookfloat} alt="Nook" />
      <div id="howdy">
        <h2>
          Howdy,
          {' '}
          {user}
          !
        </h2>
      </div>
      <div id="desktopMenu">
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
      <div id="mobileMenu">
        <HiOutlineMenu size="40px" />
      </div>
    </div>
  );
}
