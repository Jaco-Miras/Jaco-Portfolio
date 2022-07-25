import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="flex items-center">
      <nav className="w-full fixed top-0 bg-red-400 items-center">
        <div className="container mx-auto py-5 flex justify-between">
          <div className="flex items-center h-10 w-24">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase items-center">
            <li className="hover:text-gray-500">
              <a href="#">home</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#">about me</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#">works</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#">contacts</a>
            </li>
          </ul>

          {/* Hamburger */}
          <div onClick={handleClick} className="md:hidden z-10 my-2 ml-64">
            {!nav ? (
              <GiHamburgerMenu className="h-5 w-5" />
            ) : (
              <FaTimes className="h-5 w-5" />
            )}
          </div>

          {/* Responsive */}
          <div className="mt-2">
            <ul className=" hidden bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center">
              <li className="hover:text-gray-500">
                <a href="#">home</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">about me</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">works</a>
              </li>
              <li className="hover:text-gray-500">
                <a href="#">contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
