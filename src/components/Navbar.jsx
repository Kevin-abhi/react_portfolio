import React from 'react';
import logo from "../assets/AbhiLogo.png";
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <>
    <div className="container nav_bar"
      data-aos="fade-down"
      data-aos-duration="1000" 
      ></div>
    <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex items-center flex-shrink-0">
            <img className="w-20 mx-2" src={logo} alt="logo" />
        </div>
            

        {/* <div className="flex items-center justify-center gap-4 m-8 text-transparent text-1xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text">
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#about" className="nav_items">
            About 
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#education" className="nav_items">
            Education
          </a>
          <a href="#contect" className="nav_items">
            Contect
          </a>
        </div> */}

          
        <div className="flex items-center justify-center gap-4 m-8 text-2xl">
            <a href='https://www.linkedin.com/in/abhishek-pratap-mall-252481250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <FaLinkedin />
            </a>
            <a href='https://github.com/Kevin-abhi'>
              <FaGithub />
            </a>
            <a href='https://x.com/Abhishe45571287?t=BegnTQb7JEC0hDIDQGcGqQ&s=08'>
              <FaSquareXTwitter />
            </a>
            <a href='https://www.instagram.com/abhi__pratap?igsh=MWhkY291bDFyOXVwZw=='>
              <FaInstagram />
            </a>
        </div>               
    </nav>
  </>
  );
};

export default Navbar;
