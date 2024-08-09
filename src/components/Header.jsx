import React from 'react';
import { Link } from 'react-scroll'
// import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-100 text-black p-4 border-b-[0.5px]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex text-pink-600">Shahreyar's Portfolio</h1>
        <nav className='space-x-10 text-pink-600 lemon-regular cursor-pointer '>
          <Link to="about" smooth={true} duration={500} className='hover:text-xl ease-in-out duration-500 hover:text-orange-500'>About</Link>
          <Link to="skills" smooth={true} duration={500} className='hover:text-xl ease-in-out duration-500 hover:text-orange-500'>Skills</Link>
          <Link to="projects" smooth={true} duration={500} className='hover:text-xl ease-in-out duration-500 hover:text-orange-500'>Projects</Link>
          <Link to="contact" smooth={true} duration={500} className='hover:text-xl ease-in-out duration-500 hover:text-orange-500'>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
