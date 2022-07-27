import React, { useRef, useState } from "react";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex items-center justify-between">
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 bg-white z-10 items-center">
        {/* NAVBAR CONTAINER */}
        <div className="container mx-auto py-5 flex justify-between items-center pr-5 md:pr-0">
          {/* LEFT */}
          <div className="flex items-center h-10 w-24">
            <img src={Logo} alt="Logo" />
          </div>

          {/* RIGHT */}
          <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase items-center">
            <li className="hover:text-gray-500">
              <Link
                className="cursor-pointer"
                to="home"
                smooth={true}
                duration={500}
              >
                home
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link
                to="about"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                about me
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link
                to="skills"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                skills
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link
                to="works"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                works
              </Link>
            </li>
            <li className="hover:text-gray-500">
              <Link
                to="contact"
                className="cursor-pointer"
                smooth={true}
                duration={500}
              >
                contact
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <div onClick={handleClick} className="space-y-2 md:hidden z-20 my-4 ">
            {!nav ? (
              <GiHamburgerMenu className="h-5 w-5" />
            ) : (
              <FaTimes className="h-5 w-5" />
            )}
          </div>
        </div>
        {/* END OF NAVBAR CONTAINER */}

        {/* Responsive */}
        <div className="z-999">
          <ul
            className={
              !nav
                ? "hidden"
                : "bg-[#406882] absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white uppercase text-center "
            }
          >
            <li className="hover:text-gray-500 my-3">
              <Link
                onClick={handleClick}
                to="home"
                smooth={true}
                duration={500}
              >
                home
              </Link>
            </li>
            <li className="hover:text-gray-500 my-3">
              <Link
                onClick={handleClick}
                to="about"
                smooth={true}
                duration={500}
              >
                about
              </Link>
            </li>
            <li className="hover:text-gray-500 my-3">
              <Link
                onClick={handleClick}
                to="skills"
                smooth={true}
                duration={500}
              >
                skills
              </Link>
            </li>
            <li className="hover:text-gray-500 my-3">
              <Link
                onClick={handleClick}
                to="works"
                smooth={true}
                duration={500}
              >
                works
              </Link>
            </li>
            <li className="hover:text-gray-500 my-3">
              <Link
                onClick={handleClick}
                to="contact"
                smooth={true}
                duration={500}
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* END OF NAVBAR */}
    </div>
  );
}

export default Navbar;
