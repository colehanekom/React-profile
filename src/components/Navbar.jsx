import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/ch-logo.png'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#111111] text-white">
     
     {/*logo*/}
      <div>
        <img src={Logo} alt="Logo Image" style={{width:'60px'}} />
      </div>

      {/*menu*/}
      <ul className='hidden md:flex'> {/*hidden until it passes medium point */}
        <li className="px-4 cursor-pointer"> <Link activeClass="active" to="home"  smooth={true}  duration={500}>
          Home
        </Link></li>
        <li className="px-4 cursor-pointer"> <Link  to="about"  smooth={true}  duration={500} >
          About Me
        </Link></li>
        <li className="px-4 cursor-pointer"> <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li className="px-4 cursor-pointer"> <Link  to="projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
        <li className="px-4 cursor-pointer"> <Link  to="contact"  smooth={true}  duration={500} >
          Contact Me
        </Link></li>
      </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-56 bg-[#111111] flex flex-col justify-center items-center'}>
          <li className="py-4 text-1xl"><Link onClick={handleClick} activeClass="active" to="home"  smooth={true}  duration={500}>
          Home
        </Link></li>
          <li className="py-4 text-1xl"><Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About Me
        </Link></li>
          <li className="py-4 text-1xl"><Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
          <li className="py-4 text-1xl"><Link onClick={handleClick} to="projects"  smooth={true}  duration={500} >
          Projects
        </Link></li>
          <li className="py-4 text-1xl"><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact Me
        </Link></li>
        </ul>
    </div>
  )
}

export default Navbar;