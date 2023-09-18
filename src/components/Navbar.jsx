import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/ch-logo-removebg.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState('home'); // Initialize with 'home'

  const handleClick = (menuItem) => {
    setNav(false);
    setActiveMenuItem(menuItem);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenuItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    sectionIds.forEach((id) => {
      const target = document.getElementById(id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-gradient-to-r from-[#10C623] to-[#111111] text-white text-2xl" style={{ zIndex: 1000 }}>
     
      {/* Logo (linked to home) */}
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{ width: '80px' }} />
        </Link>
      </div>

      {/*menu*/}
      <ul className='hidden md:flex space-x-6'> {/*hidden until it passes medium point */}
        <MenuItem
          onClick={() => handleClick('home')}
          label="Home"
        />
        <MenuItem
          onClick={() => handleClick('about')}
          label="About"
        />
        <MenuItem
          onClick={() => handleClick('skills')}
          label="Skills"
        />
        <MenuItem
          onClick={() => handleClick('projects')}
          label="Projects"
        />
        <MenuItem
          onClick={() => handleClick('contact')}
          label="Contact"
        />
      </ul>

        {/*Hamburger*/}
        <div className="md:hidden z-10">
          {!nav ? <FaBars onClick={() => setNav(true)} /> : <FaTimes onClick={() => setNav(false)} />}
        </div>


        {/*Mobile menu*/}
        {nav && (
        <ul className="absolute top-0 right-0 w-56 h-96 space-y-10 bg-[#111111] flex flex-col justify-center items-center">
          <MenuItem
            onClick={() => handleClick('home')}
            label="Home"
            isMobile
          />
          <MenuItem
            onClick={() => handleClick('about')}
            label="About"
            isMobile
          />
          <MenuItem
            onClick={() => handleClick('skills')}
            label="Skills"
            isMobile
          />
          <MenuItem
            onClick={() => handleClick('projects')}
            label="Projects"
            isMobile
          />
          <MenuItem
            onClick={() => handleClick('contact')}
            label="Contact"
            isMobile
          />
        </ul>
      )}
    </div>
  )
}

// MenuItem component
//The placement of the MenuItem component at the bottom of the code structures the code for readability and maintainability.
const MenuItem = ({ onClick, active, label, isMobile }) => {
  return (
    <li
      className={`px-4 ${
        active ? 'text-[#10C623]' : 'hover:text-[#10C623]'
      } cursor-pointer`}
    >
      <Link
        onClick={onClick}
        to={isMobile ? label.toLowerCase().replace(' ', '-') : label.toLowerCase()}
        smooth={true}
        duration={500}
        activeClass="active"
        spy={true} // Add this line to enable scrolling spy
        offset={-70} // Adjust this offset value as needed based on your fixed navbar height
        isDynamic={true} // Add this line to enable dynamic scrolling
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;