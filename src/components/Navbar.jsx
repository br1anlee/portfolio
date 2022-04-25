import React, {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import {Link} from 'react-scroll'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='cursor-pointer'>
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
        </Link>
      </div>

      {/* Menu */}
        <ul className="hidden md:flex">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>

          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

          <li>
            <a href="Brian-Lee-Resume.pdf" target="_blank">Resume</a>
          </li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
              Skills
            </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
              Contact
            </Link></li>
        <li className='py-6 text-4xl'>
            <a href="Brian-Lee-Resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  );
}
