import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../api/Authentication';
import './Navigation.css';

function NavLinks() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const logout = () => {
    setIsLoggedIn(false);
    sessionStorage.clear('user');
  };

  return (
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
  );
}

export default NavLinks;
