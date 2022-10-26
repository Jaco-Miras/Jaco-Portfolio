import React from "react";
import Jaco from "../assets/images/Jaco3.png";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Content() {
  return (
    <div name="home">
      {/* Image */}
      <img
        className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover "
        src={Jaco}
        alt=""
      />
      {/* Circle */}
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto h-[650px] w-[650px] bg-[#383838]  rounded-full -z-10"></div>
      {/* Animated Text */}
      <div className="absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:left-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-6xl font-bold">
        <span className="text-gray-600">Frontend</span>
        <p className="text-red-500">Developer</p>
      </div>
      {/* Texts */}
      <div className="hidden lg:flex flex-col gap-5 rounded-md shadow-lg shadow-black absolute top-0 bottom-0 m-auto right-10 bg-white p-6 h-fit w-1/3">
        <h1 className="text-4xl font-bold text-indigo-900">Hi, I'm Jaco</h1>
        <p className="text-gray-400">
          I am a web developer with extensive knowledge on front-end
          development. I love solving problems and I view coding as my passion.
          I am confident on my ability to learn and on to work under pressure.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-indigo-600 cursor-pointer text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#"
        >
          Hire Me
        </Link>
      </div>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-10">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#006192]">
            <a
              className="flex mx-3 justify-between items-center ml-[20px] w-full text-white font-semibold"
              href="https://www.linkedin.com/in/jaco-raven-miras-13b6aa201/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#333333]">
            <a
              className="flex mx-3 justify-between items-center ml-[20px] w-full text-white font-semibold"
              href="https://github.com/Jaco-Miras"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[3px] duration-300 bg-[#3b5998]">
            <a
              className="flex mx-3 justify-between ml-[20px] items-center w-full text-white font-semibold"
              href="https://www.facebook.com/jraven.miras"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
