import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-navy-gradient text-white z-20 shadow-lg">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <div className="md:hidden">
          <button onClick={handleToggle} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-6 absolute md:relative left-0 top-full w-full bg-navy-gradient text-center md:bg-none md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('home')}
              className={`block p-2 cursor-pointer ${activeLink === 'home' ? 'bg-blue-950 rounded-lg' : 'hover:bg-blue-900'}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('projects')}
              className={`block p-2 cursor-pointer ${activeLink === 'projects' ? 'bg-blue-950 rounded-lg' : 'hover:bg-blue-900'}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('about')}
              className={`block p-2 cursor-pointer ${activeLink === 'about' ? 'bg-blue-950 rounded-lg' : 'hover:bg-blue-900'}`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              onClick={() => handleLinkClick('contact')}
              className={`block p-2 cursor-pointer ${activeLink === 'contact' ? 'bg-blue-950 rounded-lg' : 'hover:bg-blue-900'}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
