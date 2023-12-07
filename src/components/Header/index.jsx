import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { settings } from 'assets/portfolio';
import { darkTheme } from "theme"
import SeoHeader from '../seoHeader/SeoHeader';
import logo from 'assets/logo/logo-1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };   

  const onMouseEnter = (event, color, bgColor) => {
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = bgColor;
  };

  const onMouseOut = (event, color) => {
    const el = event.target;
    el.style.color = color;
    el.style.backgroundColor = 'transparent';
  };

  const theme = darkTheme;
  const link = settings.isSplash ? '/splash' : '/home';

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const isPageScrolled = scrollTop > 0;
    setIsScrolled(isPageScrolled);
  };

  useEffect(() => {
    const handlePageLoad = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handlePageLoad);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handlePageLoad);
    };
  }, []);
  
  return (
    <div className="fade">
      <SeoHeader />
      <header 
        className={`main-header z-50 top-0 transition-all duration-1000 ease-in-out ${
        isScrolled ? 'bg-opacity-100 bg-[#005C99] shadow-lg sticky' : 'bg-opacity-0 bg-transparent'
        }`}
      >
        <div className="header">
          <NavLink to={link} tag={Link} className="logo">
            <img 
              className="logo_header transition-all duration-1000 ease-in-out hover:animate-pulse"
              src={logo} 
              alt="logo" 
            />
          </NavLink>
          <input 
            className="menu-btn" 
            type="checkbox" 
            id="menu-btn" 
            checked={menuOpen} onChange={toggleMenu} 
          />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                tag={Link}
                className="text-[#EAA662] font-semibold text-[20px] hover:bg-blue-500 px-4 py-2 rounded-md 
                  transition-all duration-1000 ease-in-out"
                onMouseEnter={(event) => onMouseEnter(event, theme.blue, theme.orange)}
                onMouseOut={(event) => onMouseOut(event, theme.orange)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about_me"
                tag={Link}
                className="text-[#EAA662] font-semibold text-[20px] hover:bg-blue-500 px-4 py-2 rounded-md 
                  transition-all duration-1000 ease-in-out"
                onMouseEnter={(event) => onMouseEnter(event, theme.blue, theme.orange)}
                onMouseOut={(event) => onMouseOut(event, theme.orange)}
              >
                Brief Bio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my_projects"
                tag={Link}
                className="text-[#EAA662] font-semibold text-[20px] hover:bg-blue-500 px-4 py-2 rounded-md 
                  transition-all duration-1000 ease-in-out"
                onMouseEnter={(event) => onMouseEnter(event, theme.blue, theme.orange)}
                onMouseOut={(event) => onMouseOut(event, theme.orange)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact_me"
                tag={Link}
                className="text-[#EAA662] font-semibold text-[20px] hover:bg-blue-500 px-4 py-2 rounded-md 
                  transition-all duration-1000 ease-in-out"
                onMouseEnter={(event) => onMouseEnter(event, theme.blue, theme.orange)}
                onMouseOut={(event) => onMouseOut(event, theme.orange)}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
