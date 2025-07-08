import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const activeStyles= {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black" 
  }
  return ( 
    <header className="header">
      <div className="container">
        <nav className="nav">
          <h1><NavLink to="/">#VANILIFE</NavLink></h1>
          <ul>
            <li><NavLink
              style={({isActive}) => isActive ? activeStyles : null}
              to="/host">Host</NavLink></li>
            <li><NavLink
              style={({isActive}) => isActive ? activeStyles : null}
              to="/about">About</NavLink></li>
            <li><NavLink
              style={({isActive}) => isActive ? activeStyles : null}
              to="/vans">Vans</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;