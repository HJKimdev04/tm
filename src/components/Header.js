import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>스레드 소개팅</h1>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;