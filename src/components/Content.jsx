import React from "react";
import Jaco2 from "../assets/images/Jaco2.png";

function Content() {
  return (
    <div name="home">
      {/* Image */}
      <img
        className="absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover "
        src={Jaco2}
        alt=""
      />
      {/* Circle */}
      <div className="hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto h-[670px] w-[670px] bg-[#383838]  rounded-full -z-10"></div>
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
        <a
          className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit"
          href="#"
        >
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default Content;
