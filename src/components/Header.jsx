import React from 'react';
import {Link} from "react-router-dom"

function Header() {
  return (
    <header className="bg-[#01030B] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex">Shahreyar's Portfolio</h1>
        <nav className='space-x-4'>
          <Link to="/">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
