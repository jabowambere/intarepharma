import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logoImg from './logo.png';
import './Navbar.css';

const Navbar = () => {
  const { user, logout, getStockAlerts } = useAuth();
  const navigate = useNavigate();
  const alerts = getStockAlerts();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src={logoImg} alt="Intare Pharmacy Logo" className="navbar-logo" />
          <span>Intare Pharmacy</span>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/medicines" className="nav-link">Medicines</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          
          {user ? (
            <>
              {alerts.length > 0 && (
                <div className="alert-badge" title={`${alerts.length} stock alert(s)`}>
                  ⚠️ {alerts.length}
                </div>
              )}
              {user.role === 'admin' && (
                <Link to="/admin" className="nav-link">Admin Dashboard</Link>
              )}
              {(user.role === 'pharmacist' || user.role === 'admin') && (
                <Link to="/pharmacist" className="nav-link">Pharmacist Dashboard</Link>
              )}
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <button onClick={handleLogout} className="btn-logout">Logout</button>
              </div>
            </>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

