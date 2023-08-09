import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/citi.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-zinc-950 text-white">
     
     {/*logo*/}
      <div>
        <img src={Logo} alt="Logo Image" style={{width:'50px'}} />
      </div>

       {/*menu*/}
       <ul className={`md:flex ${nav ? 'hidden' : ''}`}> {/* Hidden until it passes medium point */}
        <li className="px-4 cursor-pointer">Home</li>
        <li className="px-4 cursor-pointer">About Me</li>
        <li className="px-4 cursor-pointer">Skills</li>
        <li className="px-4 cursor-pointer">Projects</li>
        <li className="px-4 cursor-pointer">Contact Me</li>
      </ul>

        {/*Hamburger*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/*Mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-950 flex flex-col justify-center items-center'}>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About Me</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Projects</li>
          <li className="py-6 text-4xl">Contact Me</li>
        </ul>
    </div>
  )
}

export default Navbar;