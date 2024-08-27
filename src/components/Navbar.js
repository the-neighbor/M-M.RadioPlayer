import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><h3><Link to="/">About</Link></h3></li>
        <li><h3><Link to="/schedule">Reg. Schedule</Link></h3></li>
        <li><h3><Link to="/upcoming">Upcoming Shows</Link></h3></li>
        <li><h3><Link to="/contact">Contact</Link></h3></li>
      </ul>
    </nav>
  );
};

export default Navbar;