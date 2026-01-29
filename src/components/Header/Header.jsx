import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <span className="logo-text">MediCare</span>
            <span className="logo-connect">Connect</span>
          </Link>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/stroke-response" className="nav-link highlight">
                Stroke Response
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <Button variant="outline" size="small" className="login-btn">
            Login
          </Button>
          <Button size="small" className="signup-btn">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
