import React from "react";
import Dots from "../assets/images/dots.png";
import Jaco from "../assets/images/Jako.jpg";

function About() {
  return (
    <div className="px-10">
      <div className="container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20">
        {/* Left */}
        <div className="relative">
          <img
            className=" h-1/4 absolute top-0 left-0 -z-10"
            src={Dots}
            alt="dots"
          />
          <div className="h-full rounded-full overflow-hidden ">
            <img className="h-96" src={Jaco} alt="" />
          </div>
        </div>
        {/* Right */}
        <div className="my-auto flex flex-col gap-3">
          <h1 className="text-indigo-600 font-bold">ABOUT ME</h1>
          <p className="text-gray-400">
            I built personal projects like clones, etc. I'm also a enthusiast
            frontend developer
          </p>
          <h2 className="text-gray-400 font-medium">HTML</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>

          <h2 className="text-gray-400 font-medium">CSS</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-5/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>

          <h2 className="text-gray-400 font-medium">Javascript</h2>
          <div className="w-full bg-gray-200 h-1.5 rounded-md">
            <div className="w-3/6 bg-indigo-600 h-1.5 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
