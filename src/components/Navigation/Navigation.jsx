import React, { useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import nookfloat from './nookfloat.gif';
import NavLinks from './NavLinks';
import './Navigation.css';

export default function Navigation() {
  const user = sessionStorage.getItem('user');
  const [open, setOpen] = useState(false);

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
        <NavLinks />
      </div>
      <div id="mobileMenu">
        <HiOutlineMenu size="40px" onClick={() => setOpen(!open)} />
        {open && <NavLinks />}
      </div>
    </div>
  );
}
