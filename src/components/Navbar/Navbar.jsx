import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import {RiMenu4Line} from "react-icons/ri";
// import {MdMenu} from "react-icons/md"

const Navbar = () => {
  const [stickyvar, stickymethod] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? stickymethod(true) : stickymethod(false);
    });
  },[])


  const [mobileMenu,setMobileMenu] = useState(false);
 const toggleSetter =()=>{
  mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
 }

  return (
    <div className='w-full'>
        
        <nav className={`container ${stickyvar ? 'dark-nav' : ''}`}>
        
        <h1 className="logo">BeautyStyle</h1>
        <ul className={`${mobileMenu ? 'toggle-hide' : ''}`}>
         
            <li><Link to="Hero" offset={0} smooth={true} duration={500}>Home</Link></li>
            <li><Link to="Services" offset={-260} smooth={true} duration={500}>Services</Link></li>
            <li><Link to="About" offset={-150} smooth={true} duration={500}>About us</Link></li>
            <li><Link to="Gallery" offset={-260} smooth={true} duration={500}>Gallery</Link></li>
            <li><button className='btn' ><Link to="Contact" offset={-150} smooth={true} duration={500}>Contact us</Link></button></li>
        </ul>
        <RiMenu4Line size={"25px"} onClick={toggleSetter} className='menu-icon'/>
       
        </nav>
    </div>
  )
}

export default Navbar