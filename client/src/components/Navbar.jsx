import React from "react";
import logo from "../assets/logo.png";
function Navbar({ active }) {
  return (
    <header>
      <nav>
        <div className="logo__wrapper">
            <img src={logo} alt="Logo" />
            <h4>DoDo</h4>
        </div>
        <ul className="navigation-menu">
          <li>
            <a href="/" className={active === 'home' ? 'activeNav' : ''}>Home</a>
          </li>
          <li>
            <a href="/login" className={active === 'login' ? 'activeNav' : ''}>Login</a>
          </li>
          <li>
            <a href="/register" className={active === 'register' ? 'activeNav' : ''}>Register</a>
          </li>
          <li>
            <a href="/to-do-list" className={active === 'to-do-list' ? 'activeNav' : ''}>To-Do List</a>
          </li>
        </ul>
    </nav>
    </header>
  );
}

export default Navbar;
