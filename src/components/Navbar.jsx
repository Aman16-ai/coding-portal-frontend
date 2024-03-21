import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '10px',
  };

  return (
    <nav style={navStyle}>
      <h3>Coding Portal Task</h3>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/submissions" style={linkStyle}>Submissions</Link>
      </div>
    </nav>
  );
};

export default Navbar;
