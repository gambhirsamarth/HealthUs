import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Health Us</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-blue-200">Home</Link></li>
          <li><Link to="/about-us" className="text-white hover:text-blue-200">About</Link></li>
          <li><Link to="/therapy-sessions" className="text-white hover:text-blue-200">Therapy Sessions</Link></li>
          <li><Link to="/meditation" className="text-white hover:text-blue-200">Meditation Classes</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
