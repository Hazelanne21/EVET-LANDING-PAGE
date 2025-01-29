// src/components/Navbar.js
import { NavLink } from 'react-router-dom';
import petLogo from '../assets/logo2.png';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="petlogo">
        <img src={petLogo} width="70" alt="Pet Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/CNN"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            CNN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
