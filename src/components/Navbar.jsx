import React, {useState} from 'react';
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

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-gradient-to-r from-[#10C623] to-[#111111] text-white text-2xl">
     
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
          active={activeMenuItem === 'home'}
          label="Home"
        />
        <li className="px-4 hover:text-[#10C623] cursor-pointer"> <Link  to="about"  smooth={true}  duration={500} >
          About Me
        </Link></li>
        <li className="px-4 hover:text-[#10C623] cursor-pointer"> <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className="px-4 hover:text-[#10C623] cursor-pointer"> <Link  to="projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
        <li className="px-4 hover:text-[#10C623] cursor-pointer"> <Link  to="contact"  smooth={true}  duration={500} >
          Contact Me
        </Link></li>
      </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile menu*/}
        {nav && ( 
        <ul className='absolute top-0 left-0 w-56 bg-[#111111] flex flex-col justify-center items-center'>
          <li className="py-4 text-1xl hover:text-[#10C623] cursor-pointer"><Link onClick={handleClick} activeClass="active" to="home"  smooth={true}  duration={500}>
          Home
        </Link></li>
          <li className="py-4 text-1xl hover:text-[#10C623] cursor-pointer"><Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About Me
        </Link></li>
          <li className="py-4 text-1xl hover:text-[#10C623] cursor-pointer"><Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
          <li className="py-4 text-1xl hover:text-[#10C623] cursor-pointer"><Link onClick={handleClick} to="projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
          <li className="py-4 text-1xl hover:text-[#10C623] cursor-pointer"><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact Me
        </Link></li>
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
      >
        {label}
      </Link>
    </li>
  );
};

export default Navbar;